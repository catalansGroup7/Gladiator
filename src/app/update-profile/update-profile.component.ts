import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { UpdateUserService } from "../update-user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  confirmPass ="";

  customerName:string;
  customerSurname:string;
  id:number;
  emptype:string;
  email : string;
  dob : Date;
  city:string;
  contact:string;
  pass :string;
  passFlag:boolean=false;
  customer= new Customer();

  constructor(private service:UpdateUserService, private router:Router) {
    if(sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.customerId);
    this.service.findById(this.id).subscribe(data=>{
      console.log(data.customerId);
      this.customer = data;
      this.customerName = data.customerFirstName;
      this.customerSurname = data.customerLastName;
    //this.id = data.customerId;
      this.id = sessionStorage.customerId;
      this.email = data.customerEmail;
      this.dob = data.customerdateOfBirth;
      this.emptype = data.customerEmploymentType;
      this.city = data.customerCity;
      this.contact=data.customerMobileNumber;
      this.pass = data.customerPassword;

      //alert("Information updated successfully");
    })
  }


  ngOnInit(): void {
    // this.customerName = sessionStorage.getItem("customerFirstName");
    // this.customerSurname = sessionStorage.getItem("customerLastname");
    // this.id = sessionStorage.getItem('customerId');
    // this.email= sessionStorage.getItem('customerEmail');
  }
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
  confirmPassword(): boolean {
    if (this.pass == this.confirmPass){
      return true;      
    }
    return false;
  }
    
  
    manageMobile() {
      var data = this.customer.customerMobileNumber;
      data = data.replace(/ /g, "");
      if (data.length <= 5)
      this.customer.customerMobileNumber = data;
      else
      this.customer.customerMobileNumber = data.substring(0, 5) + " " + data.substring(5, data.length);
    }


    isNumber(event, id, l) {
      var mobile = (<HTMLInputElement>document.getElementById(id));
      var data = mobile.value;
      var key = event.key;
      if (isNaN(key) || data.length > l)
        event.preventDefault();
    }


  
  update(){
    if(this.customer.customerPassword==this.confirmPass){
      this.service.update(this.customer).subscribe(data=>{

        //alert(JSON.stringify(data));
        alert("Your details were successfully updated");
        
      })
    }
    else{
      this.passFlag=true;
    }
    

  }

}
