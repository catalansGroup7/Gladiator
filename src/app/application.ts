import { Customer } from './models/customer';

export class Application{
    [x: string]: any;
    applicationId:number;
    customer:Customer;
    gender:string;
    address:string;
    userPAN:string;
    aadharNumber:string;
    Nationality:string;
    retirementAge:number;
    organisation:string;
    income:number;
    loanAmount:number;
    tenure:number;
    downPayment:number;
    maritialStatus:string;
    noOfDependents:number;
    depandentMonthlyExpenses:number;
    personlExpenses:number;
    existingLoan:string;
    emiExistingLoan:string;
    maxLoanAmount:number;
    loanStatus:string;
    appointmentDate:Date;
}