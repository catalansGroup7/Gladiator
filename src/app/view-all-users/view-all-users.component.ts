import { Component, OnInit } from '@angular/core';

import { AdminLoginService } from '../services/admin-login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-users',

  templateUrl: './view-all-users.component.html',

  styleUrls: ['./view-all-users.component.css']
})

export class ViewAllUsersComponent implements OnInit {


  allCustomers: any;

  constructor(private adminService: AdminLoginService, private router:Router) {
    if(sessionStorage.getItem('customerId')!=null){
      this.router.navigate(['/homeLink']);
    }

    adminService.viewAllCustomers().subscribe(data => {

      this.allCustomers = data;

      console.log(this.allCustomers);
    })
  }

  ngOnInit(): void {
  }
}
