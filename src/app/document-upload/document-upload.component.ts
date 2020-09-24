import { Component, OnInit } from '@angular/core';
import { ApplyLoanService } from '../apply-loan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  aadharCard: any;
  panCard :any;
	letterOfAgreement :any;
	noObjectionCerti :any;
	saleAgreement :any;
	salarySlip :any;
  applicationId : any;

  constructor(private service:ApplyLoanService,private router:Router) { }

  ngOnInit(): void {
    this.applicationId  = sessionStorage.getItem('applicationId');
  }

  onFileChange(event){
    this.aadharCard= event.target.files[0];
    this.panCard=event.target.files[0];
    this.letterOfAgreement=event.target.files[0];
    this.salarySlip=event.target.files[0];
    this.noObjectionCerti=event.target.files[0];
    this.saleAgreement=event.target.files[0];
  }

  formData: FormData = new FormData()
  uploadAadharCard() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('aadharCard', this.aadharCard);
    this.service.uploadAadharCard(this.formData).subscribe(data => {
      alert("Aadhar Card Uploaded Successfully");
      console.log(this.formData.get('aadharCard'));
    })
  }
  uploadPanCard() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('panCard',this.panCard);
    this.service.uploadPanCard(this.formData).subscribe(data => {
      alert("Pan Card Uploaded Successfully");
      console.log(this.formData.get('panCard'));
    })
  }
  uploadLetterOfAgreement() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('letterOfAgreement',this.letterOfAgreement);
    this.service.uploadLetterOfAgreement(this.formData).subscribe(data => {
      alert("Letter Of Agreement Uploaded Successfully");
      console.log(this.formData.get('letterOfAgreement'));
    })
  }

  uploadSalarySlip() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('salarySlip',this.salarySlip);
    this.service.uploadSalarySlip(this.formData).subscribe(data => {
      alert("Salary Slip Uploaded Successfully");
      console.log(this.formData.get('aadharCard'));
    })
  }
  
  uploadNOC() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('noObjectionCerti',this.noObjectionCerti);
    this.service.uploadNOC(this.formData).subscribe(data => {
      alert("NOC Uploaded Successfully");
    })
  }

  uploadSaleAgreement() {
    this.formData.append('applicationId', this.applicationId);
    this.formData.append('saleAgreement',this.saleAgreement);
    this.service.uploadSaleAgreement(this.formData).subscribe(data => {
      alert("Sales Agreement Uploaded Successfully");
    })
  }

  redirect(){
    this.router.navigate(['/customerDashboard']);
  }
  
}