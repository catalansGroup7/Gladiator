import { Component, OnInit } from '@angular/core';
import { ChecklistResult } from "../models/ChecklistResult";
import { SendStatusDto } from '../models/StatusSendDto';
import { LoginserviceService } from '../loginservice.service';
import { UpdateUserService } from '../update-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  customerName:string;
  customerSurname:string;
  id:number;
  showFlag: boolean = false;
  applicationId: number;
  statusResult: ChecklistResult = new ChecklistResult();
  searchData: SendStatusDto = new SendStatusDto();
  message:any;
  constructor(private search: LoginserviceService,private service:UpdateUserService,private router:Router) {
    if(sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.customerId);
    this.service.findById(this.id).subscribe(data=>{
      console.log(data.customerId);
     
      this.customerName = data.customerFirstName;
      this.customerSurname = data.customerLastName;
    //this.id = data.customerId;
      
     

      //alert("Information updated successfully");
    
  })  }
  submit() {
    this.searchData.applicationId = this.applicationId;
    this.searchData.customerid = parseInt(sessionStorage.getItem('customerId'));
    console.log(this.searchData);
    this.search.checklist(this.searchData).subscribe(data => {
      console.log(data);
      if (data.status == 'SUCCESS') {

        this.showFlag = true;
        this.statusResult.applicationId = data.applicationId;
        this.statusResult.customerId = data.customerId;
        this.statusResult.aadharCard = data.aadharCard;
        this.statusResult.letterOfAgreement=data.letterOfAgreement;
        this.statusResult.noObjectionCerti=data.noObjectionCerti;
        this.statusResult.salarySlip=data.salarySlip;
        this.statusResult.saleAgreement=data.saleAgreement;
        this.statusResult.panCard=data.panCard;
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
