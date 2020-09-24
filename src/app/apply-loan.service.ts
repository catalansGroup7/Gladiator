import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ApplyLoanService {

  constructor(private http: HttpClient) { }

  findById(id: number): Observable<any> {
    return this.http.post("http://localhost:8181/findAUser", id);
  }
  applyloan(apply: Application) {
    return this.http.post("http://localhost:8181/applyLoan", apply);
  }
  uploadAadharCard(formData: FormData) {
    let url = 'http://localhost:8181/pic-upload';
    return this.http.post(url, formData);
  }

  uploadPanCard(formData: FormData) {
    let url = 'http://localhost:8181/PANUpload';
    return this.http.post(url, formData);
  }

  uploadLetterOfAgreement(formData: FormData) {
    let url = 'http://localhost:8181/LOAUpload';
    return this.http.post(url, formData);
  }

  uploadSalarySlip(formData: FormData) {
    let url = 'http://localhost:8181/salarySlipUpload';
    return this.http.post(url, formData);
  }
  uploadNOC(formData: FormData) {
    let url = 'http://localhost:8181/NOCUpload';
    return this.http.post(url, formData);
  }

  uploadSaleAgreement(formData: FormData) {
    let url = 'http://localhost:8181/saleAgreementUpload';
    return this.http.post(url, formData);
  }
}