import { Component, OnInit } from '@angular/core';
import { Login } from "../models/login";
import { Router } from "@angular/router";
import { LoginserviceService } from "../loginservice.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

 login = new Login();

constructor(private router : Router,private service : LoginserviceService ){
  if(sessionStorage.getItem('customerId')!=null || sessionStorage.getItem('adminId')!=null){
    this.router.navigate(['/homeLink']);
  }
}

  ngOnInit(): void {
  }
  message:any;
 
  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  loginUser(){

    //alert(JSON.stringify(this.login));
    this.service.loginUser(this.login).subscribe(
      data=>{
       // alert(JSON.stringify(data))
     //   this.status=data;
        if(data.status=='SUCCESS'){
          let flag = 'true';
          let customerId= data.customerId;
          let customerName=data.customerFirstName;
          let customerSurname = data.customerLastName;
          let customerMail = data.customerEmail;
          this.message = data.message;
          sessionStorage.setItem('customerId',customerId);
          sessionStorage.setItem('customerFirstName',customerName);
          localStorage.setItem('isLogedIn',flag);
          sessionStorage.setItem('customerLastname',customerSurname);
          sessionStorage.setItem('customerEmail',customerMail);
          this.router.navigate(['customerDashboard']);
          
        }

        else{
          
          this.message = data.message;
        }

  }
    )

}
}
