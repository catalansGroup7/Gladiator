import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPassword } from "../models/forgotPassword";
import {  ForgotPasswordService} from "../forgot-password.service";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    constructor(private forgotPasswordService : ForgotPasswordService, private router:Router) { }
    
      show:boolean=true
      show1:boolean=false
      show2:boolean=false
      show3:boolean=false
      userOtp:any;
      userEmail:any;
      forgotPasswordDetails:ForgotPassword=new ForgotPassword()
      message:string
      message1:string
      message2:string
      message3:string
        
      
    
      getOTP()
      {
        this.userEmail=this.forgotPasswordDetails.email
        this.forgotPasswordService.verifyEmail(this.forgotPasswordDetails).subscribe(
         data=>{
           if(data.status=='SUCCESS')
           {
             this.message=""
             this.userOtp=data.otp
             this.show=false;
             this.show1=true;
             this.show2=false;
             this.show3=false;
             this.message=""
             this.message1=""
             this.message2=""
             this.message3=""
           }
           else
           {
             this.message=data.message
             this.message1=""
             this.message2=""
             this.message3=""  
            
           }
         })
      }
    
    verifyOTP()
    {
      if(this.userOtp==this.forgotPasswordDetails.otp) {
    
             this.show=false;
             this.show1=false;
             this.show2=true;
             this.show3=false;
             this.message=""
             this.message1=""
             this.message2=""
             this.message3=""
      }
      else
      {
        this.message1="OTP verification failed!"
        this.message=""
        this.message2=""
        this.message3=""
        
      }
    }
    
    resetPassword()
    {
      if (this.forgotPasswordDetails.newPassword===this.forgotPasswordDetails.newPasswordConfirm) 
      {
        this.message2=""
        this.forgotPasswordService.forgotPassword(this.forgotPasswordDetails).subscribe(
          data=>{
          if(data.status=='SUCCESS')
           {
          
             this.show2=false;
             this.show3=true;
           }
           else
           {
             this.message2=data.message
             
              
           }
          }
        )  
      }
      else
      {
               this.message2="Password didn't match!"
               this.message1=""
               this.message=""
               this.message3=""
      }
    
    }
      
      ngOnInit(): void {
      }
      
    }
    