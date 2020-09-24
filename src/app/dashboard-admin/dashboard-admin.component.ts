import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  flag:boolean=true;
  name:any;
  constructor(private router:Router) { 
    this.name=sessionStorage.getItem("adminName");
    
  }
  
  ngOnInit(): void {
    this.flag=true;
    if (! localStorage.justOnce) {
      localStorage.setItem("justOnce", "true");
      window.location.reload();
  }
  }

}
