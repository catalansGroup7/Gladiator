import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Customer } from "../models/customer";
import { RegisterServiceService } from '../register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPass="";
  customer:Customer = new Customer();
  data:any;
  message:string;
  passwordFlag:boolean=false;
  constructor(private router: Router,private service:RegisterServiceService) { 
  }
  pass : boolean = false;
  ngOnInit(): void {
    
  }
  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
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
    confirmPassword():boolean {
      if (this.customer.customerPassword == this.confirmPass){
        return true;      
      }
      return false;
    }
  register(){
    // alert(JSON.stringify(this.customer));
    
    if(this.customer.customerPassword==this.confirmPass){
      this.service.register(this.customer).subscribe(data=>{
        if(data.status=='SUCCESS'){
          alert("Thank you for registering with us. Please Check Your Mail ID for your Customer ID");
          this.data=data;
          this.message=data.message;
          console.log(data);
          this.router.navigate(['/loginLink']);
        }
        
        else{
          this.message=data.message;
        }
        
      })
    }
    else{
      this.passwordFlag=true;
    }
    
   
    // alert(this.customer);
    // console.log(this.customer);
  }
}
