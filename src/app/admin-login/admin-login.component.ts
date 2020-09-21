import { Component, OnInit } from '@angular/core';
import { AdminLogin } from "../models/AdminLogin";
import { AdminLoginService } from "../services/admin-login.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  login: AdminLogin = new AdminLogin();
  data: any;
  message: any;
  status;
  constructor(private service: AdminLoginService, private router: Router) {
    if(sessionStorage.getItem('customerId')!=null || sessionStorage.getItem('adminId')!=null){
      this.router.navigate(['/homeLink']);
    }
   }

  ngOnInit(): void {
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  loginAdmin() {
    this.service.loginAdmin(this.login).subscribe(data => {
      //alert(JSON.stringify(data));
      this.status = data;
      if (data.status == "SUCCESS") {
        let flag = 'true';
        let adminId = data.adminId;
        let adminName = data.adminName;
        this.message = data.message;
        sessionStorage.setItem("adminId", adminId);
        sessionStorage.setItem("adminName", adminName);
        localStorage.setItem('isLogedIn', flag);
        this.router.navigate(['/dashboardAdmin']);

      } else {
        this.message = data.message;
      }
    })
  }
}