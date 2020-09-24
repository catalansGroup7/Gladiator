import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from "./models/login";
import { Observable } from 'rxjs';
import { FetchById } from './models/FetchById';
import { SendStatusDto } from './models/StatusSendDto';
import { ForgotPassword } from './models/forgotPassword';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  loginUser(login: Login): Observable<any> {
    var url = "http://localhost:8181/loginUser";
    return this.http.post(url, login);
  }

  viewLoanByCustomerId(id): Observable<any> {
    let url = "http://localhost:8181/viewLoanByCustomerId";
    return this.http.post(url, id);
  }

  viewStatus(searchData:SendStatusDto):Observable<any>{
    let url="http://localhost:8181/searchStatus";
    return this.http.post(url,searchData);
  }
  checklist(searchData:SendStatusDto):Observable<any>{
    let url="http://localhost:8181/generateCheckList";
    return this.http.post(url,searchData);
  }
forgotPassword(forgot:ForgotPassword):Observable<any>{
  let url:'http://localhost:8181/forgotPassword';
  return this.http.post(url,forgot);
}

viewLoanByLoanId(id):Observable<any>{
  let url = "http://localhost:8181/viewByLoanId";
    return this.http.post(url, id); 
}

}
