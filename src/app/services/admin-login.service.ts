import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminLogin } from "../models/AdminLogin";
import { Application } from '../application';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(login:AdminLogin):Observable<any>{
    let url="http://localhost:8181/adminLogin";
    return this.http.post(url,login);
  }
  viewAllusers(){
    let url="http://localhost:8181/viewAllPendingApplication";
    return this.http.get(url);
  }
  viewAllCustomers(){
    let url="http://localhost:8181/viewAllCustomers";
    return this.http.get(url);
  }

  validateCustomer(applicationId):Observable<any>{
    let url="http://localhost:8181/validateCustomer";
    return this.http.post(url,applicationId);
  }
  rejectCustomer(applicationId):Observable<any>{
    let url="http://localhost:8181/rejectCustomer";
    return this.http.post(url,applicationId);
  }
  
  viewAllLoan():Observable<any>{
    let url = "http://localhost:8181/viewAllLoan";
    return this.http.get(url);
  }
}
