import { Component, OnInit } from '@angular/core';
import { AdminUpdate } from "../models/AdminUpdate";
import { Router } from '@angular/router';
import { UpdateAdminDetailsService } from "../services/update-admin-details.service";
@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  id:number;
  adminFirstName:string;
  adminLastName:string;
  email : string;
  dob : Date;
  gender:string;
  contact:string;
  pass :string;
  updateAdmin: AdminUpdate = new AdminUpdate();
  
  constructor(private service:UpdateAdminDetailsService, private router:Router) {
    if(sessionStorage.getItem('customerId')!=null){
      this.router.navigate(['/homeLink']);
    }
    this.id = parseInt(sessionStorage.adminId);
    this.service.findById(this.id).subscribe(data=>{
      console.log(data.adminId);
      this.updateAdmin = data;
      this.adminFirstName = data.adminFirstName;
      this.adminLastName = data.adminLastName
      this.id = sessionStorage.adminId;
      this.email = data.adminEmail;
      this.dob = data.dateOfBirth;
      this.gender = data.gender;
      this.contact=data.adminContact;
      this.pass = data.adminPassword;
   //console.log(this.updateAdmin) 
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
  
  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }
  
}
