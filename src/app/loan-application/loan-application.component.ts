import { Component, OnInit } from '@angular/core';
import { ApplyLoanService } from "../apply-loan.service";
import { Customer } from '../models/customer';
import { Application } from '../application';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  id:number;
  customer=new Customer();
  application = new Application();
  maxLoan :number;
  applicationId : number;
  
  constructor(private service : ApplyLoanService, private router: Router) {
    if(sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.customerId);
    this.service.findById(this.id).subscribe(data=>{
     console.log(data);
     this.customer = data;
     this.application.customer = this.customer;

    //this.id = sessionStorage.customerId;
    //this.application.customerId = parseInt(sessionStorage.customerId);
    this.application.customer = data;
    console.log(this.application.customer);
    console.log(this.application.customer.customerId );
    //this.maxLoan = data.maxLoanAmount;
    })
  }

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
    
  manageAadharCard(){
    var data= this.application.aadharNumber;
    data = data.replace(/ /g, "");
    var n = data.length / 4;
    this.application.aadharNumber = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.application.aadharNumber += ' ' + data.substring(4 * i, 4 * (i + 1));
      }
  }
  


    isNumber(event, id, l) {
      var mobile = (<HTMLInputElement>document.getElementById(id));
      var data = mobile.value;
      var key = event.key;
      if (isNaN(key) || data.length > l)
        event.preventDefault();
    }

    applyLoan(){
         console.log(this.application);
       this.service.applyloan(this.application).subscribe(data=>{
        let appId = JSON.parse(JSON.stringify(data));
        sessionStorage.setItem('applicationId',appId);
        console.log(sessionStorage.applicationId);
         this.router.navigate(['/documentUpload'])
      })
    }
  
}
window.onload=function(){
const slidePage:HTMLInputElement=document.querySelector(".slidepage");
const firtNextBtn:HTMLInputElement=document.querySelector(".nextBtn");
const prevBtnSec:HTMLInputElement=document.querySelector(".prev-1");
const nextBtnSec:HTMLInputElement=document.querySelector(".next-1");
const prevBtnThird:HTMLInputElement=document.querySelector(".prev-2");

const submitBtn:HTMLInputElement=document.querySelector(".Submit");
const progressText=(<HTMLInputElement[]><any>document.querySelectorAll(".step p"));
const progressCheck=(<HTMLInputElement[]><any>document.querySelectorAll(".step .check"));
const bullet=(<HTMLInputElement[]><any>document.querySelectorAll(".step .bullet"));
let max=3;
let current=1;

//Next BUtton 

firtNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});



nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
});

submitBtn.addEventListener("click",function(){
    slidePage.style.marginLeft="-50%";
    bullet[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    current +=1;
    // setTimeout(function(){
    //     alert("You're successfully Registered");
    //     location.reload();
    // }, 800);
});

//Previous Button

prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft="0%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});


prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft="-25%";
    bullet[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    current -=1;
});
}
