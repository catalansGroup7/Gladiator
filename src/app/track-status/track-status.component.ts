import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FetchById } from '../models/FetchById';
import { SendStatusDto } from '../models/StatusSendDto';
import { timer } from 'rxjs';
import { UpdateUserService } from '../update-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent implements OnInit {
  customerName:string;
  customerSurname:string;
  id:number;
  showFlag: boolean = false;
  applicationId: number;
  statusResult: FetchById = new FetchById();
  searchData: SendStatusDto = new SendStatusDto();
  message:any;
  constructor(private search: LoginserviceService,private service: UpdateUserService,private router:Router) {
    if(sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.customerId);
    this.service.findById(this.id).subscribe(data=>{
      console.log(data.customerId);
     
      this.customerName = data.customerFirstName;
      this.customerSurname = data.customerLastName;
    //this.id = data.customerId;
      this.id = sessionStorage.customerId;
     

      //alert("Information updated successfully");
    })  }
  submit() {
    this.searchData.applicationId = this.applicationId;
    this.searchData.customerid = parseInt(sessionStorage.getItem('customerId'));
    this.search.viewStatus(this.searchData).subscribe(data => {
      console.log(data);
      if (data.status == 'SUCCESS') {
        this.showFlag = true;
        this.statusResult.applicationId = data.applicationId;
        this.statusResult.appointmentDate = data.appointmentDate;
        this.statusResult.loanStatus = data.loanStatus;
      }
      else{
        this.showFlag = false;
        this.message="Enter Correct Application ID";
      }
    })
    // console.log(this.statusResult);
    
  }

  ngOnInit(): void {
  }

}
