import { Injectable } from '@angular/core';
import { Customer } from "./models/customer";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

 
  
  constructor(private http : HttpClient) { 
    
  }
  
  
    findById(id:number):Observable<any>{
      return this.http.post("http://localhost:8181/findAUser",id);
    }

    update(cust:Customer){
      return this.http.post("http://localhost:8181/updateUser",cust);
    }
  }

