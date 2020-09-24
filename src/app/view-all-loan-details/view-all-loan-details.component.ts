import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-loan-details',
  templateUrl: './view-all-loan-details.component.html',
  styleUrls: ['./view-all-loan-details.component.css']
})
export class ViewAllLoanDetailsComponent implements OnInit {

  allLoan:any;
  constructor(private loan:AdminLoginService, private router:Router) {
    if(sessionStorage.getItem('customerId')!=null){
      this.router.navigate(['/homeLink']);
    }
    loan.viewAllLoan().subscribe(data=>{
      this.allLoan=data;
    })
   }

  ngOnInit(): void {
  }

}
