import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ForgotPassword } from "./models/forgotPassword"
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }
  

  verifyEmail(forgotPasswordDetails:ForgotPassword):Observable<any>
  {
    
      return this.http.post("http://localhost:8181/verifyEmail",forgotPasswordDetails);

   
  }
  forgotPassword(forgotPasswordDetails:ForgotPassword):Observable<any>
  {
      return this.http.post("http://localhost:8181/forgotPassword",forgotPasswordDetails);

  }  
}
