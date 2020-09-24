import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AdminUpdate } from "../models/AdminUpdate";
@Injectable({
  providedIn: 'root'
})
export class UpdateAdminDetailsService {

  constructor(private http:HttpClient) { }

  findById(id:number):Observable<any>{
    return this.http.post("http://localhost:8181/findAAdmin",id);
  }

  update(admin:AdminUpdate){
   // let url="http://localhost:8182/updateAdmin";
     let url="http://localhost:8181/adminLogin";
     return this.http.post(url,admin);
  }
}
