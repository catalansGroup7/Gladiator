import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-loan-application',
  templateUrl: './manage-loan-application.component.html',
  styleUrls: ['./manage-loan-application.component.css']
})
export class ManageLoanApplicationComponent implements OnInit {
  flag:boolean=true;
  constructor() { }
  searchApplication(){
    this.flag=false;
  }
  
  ngOnInit(): void {
  }
  updateStatus(){
    
  }
}
