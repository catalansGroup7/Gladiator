import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BankInfoComponent } from './bank-info/bank-info.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { UpdateProfileComponent } from "./update-profile/update-profile.component";
import { AuthGuard } from './auth/auth.guard';
import { ViewAllApplicationsComponent } from './view-all-applications/view-all-applications.component';
import { ManageLoanApplicationComponent } from './manage-loan-application/manage-loan-application.component';
import { ViewUserProfileComponent } from "./view-user-profile/view-user-profile.component";
import { ViewAllLoanDetailsComponent } from './view-all-loan-details/view-all-loan-details.component';
import { ViewLoanByIdComponent } from './view-loan-by-id/view-loan-by-id.component';
import { TrackStatusComponent } from './track-status/track-status.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { ChecklistComponent } from "./checklist/checklist.component";
const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'homeLink', component: HomePageComponent
  },
  {
    path: 'calculatorLink', component: CalculatorComponent
  },
  {
    path: 'FaqLink', component: FaqPageComponent
  },
  {
    path: 'loginLink', component: LoginPageComponent
  },
  {
    path: 'adminLink', component: AdminLoginComponent
  },
  {
    path: 'infoLink', component: BankInfoComponent
  }, {
    path: 'forgotPasswordLink', component: ForgotPasswordComponent
  },
  {
    path: 'resetPasswordLink', component: ResetPasswordComponent
  },
  {
    path: 'registerLink', component: RegisterComponent
  },
  {
    path: 'dashboardAdmin', component: DashboardAdminComponent, canActivate: [AuthGuard]
  }, 
  {
    path: 'viewAllUser', component: ViewAllUsersComponent, canActivate: [AuthGuard]
  },
  {
    path: 'updateDetails', component: UpdateDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'customerDashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard]

  },
  {
    path: 'loanapplicationlink', component: LoanApplicationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'updateUserProfile', component: UpdateProfileComponent, canActivate: [AuthGuard]
  },
  {

    path: 'viewAllApplications', component: ViewAllApplicationsComponent, canActivate: [AuthGuard]
  },
  {
    path:'manageLoanStatus',component: ManageLoanApplicationComponent, canActivate: [AuthGuard]
  },
  {
    path:'viewUserLink',component: ViewUserProfileComponent, canActivate: [AuthGuard]
  },
  {
    path:'viewAllLoan',component: ViewAllLoanDetailsComponent, canActivate: [AuthGuard]
  },
  {
    path:'viewLoanDetails',component: ViewLoanByIdComponent, canActivate: [AuthGuard]
  },
  {
    path:'trackApplication',component: TrackStatusComponent, canActivate: [AuthGuard]
  },{
    path:'documentUpload',component:DocumentUploadComponent, canActivate: [AuthGuard]
  },{
    path:'checklistLink',component:ChecklistComponent, canActivate: [AuthGuard]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
