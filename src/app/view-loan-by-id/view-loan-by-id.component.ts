import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { FetchById } from '../models/FetchById';
import { UpdateUserService } from '../update-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-loan-by-id',
  templateUrl: './view-loan-by-id.component.html',
  styleUrls: ['./view-loan-by-id.component.css']
})
export class ViewLoanByIdComponent implements OnInit {
  customerName:string;
  customerSurname:string;
  
  viewLoanById = new FetchById();
  loanDetails:any;
  id:number;
  constructor(private seeLoan:LoginserviceService,private service:UpdateUserService,private router:Router) {
    if(sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.customerId);
    console.log(this.id);
    // this.viewLoanById.id= parseInt(sessionStorage.customerId);
    seeLoan.viewLoanByCustomerId(this.id).subscribe(data=>{
      this.loanDetails=data;
    })
      this.service.findById(this.id).subscribe(data=>{
        console.log(data.customerId);
       
        this.customerName = data.customerFirstName;
        this.customerSurname = data.customerLastName;
      //this.id = data.customerId;
        this.id = sessionStorage.customerId;
       
  
        //alert("Information updated successfully");
      
    })
  }

  ngOnInit(): void {
  }

}
