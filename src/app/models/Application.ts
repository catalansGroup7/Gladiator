import{ Customer } from './customer'
export class Application{
	//customerId : number;
    customer:Customer;
    
	gender:string;

	address:string;

	userPAN:string;

	aadharNumber:string;

	nationality:string;

	retirementAge:number;

	organisation:string;
	
	income:number;
	
	loanAmount:number;

	 tenure:number;
	
	 downPayment:number;
	
	 maritialStatus:string;
	
	 noOfDependents:number;
	
	 depandentMonthlyExpenses:number;
	
	 personlExpenses : number;
	
	 existingLoan : string;
	
	 emiExistingLoan : number;
	
	 maxLoanAmount :number; //read only field based on above parameters and will be calculated on front end
	
	loanStatus:string;
	
	appointmentDate:string;

	propertyType : string;
	
	propertyLocation : string;
	
	propertyCost : number;

	panCard :string;
	
	letterOfAgreement :string;
	
	 noObjectionCerti :string;
	
	saleAgreement :string;
	
	aadharCard :string;
	
	salarySlip :string;
	
}