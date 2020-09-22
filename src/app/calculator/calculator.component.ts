import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  NgZone
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['../app.component.css']
})
export class CalculatorComponent implements OnInit {
  loanamount:any;
  tenure:any;
  tenure1:any;
  roi:any;
  roi1:any;
  emi:any;
  pow1:any;
  pow2:any;
  monthlyincome:any;
  eligibility:any;
  flag:any=true;
  flag1:any=false;
  flag2:boolean=false;
  loan:any;
  dataSource:any;
  interest:any;
  change(c:boolean){this.flag=c}
  calculateemi(form:NgForm){
    this.tenure1=this.tenure*12;
    this.roi1=this.roi/(12*100);
    this.pow1=Math.pow((1+this.roi1),this.tenure1);
    this.pow2=Math.pow((1+this.roi1),(this.tenure1))-1;
    this.emi=(this.loanamount*this.roi1*this.pow1)/this.pow2;
    this.emi=Math.round(this.emi);
    this.interest=(this.loanamount*this.roi*this.tenure)/100;
    this.interest=Math.round(this.interest);
    this.flag1=true;
    this.dataSource = {
      "chart": {
          "plottooltext": "Home Loan",
          "showLegend": "1",
          "showPercentValues": "1",
          "legendPosition": "bottom",
          "useDataPlotColorForLabels": "1",
          "enablemultislicing": "0",
          "showlegend": "0",
          "theme": "fusion",
      },
      "data": [{
          "label": "Principal Amount ₹"+this.loanamount+" ",
          "value": this.loanamount
      }, {
          "label": "Interest Amount ₹"+this.interest+" ",
          "value": this.interest
      }]
    };
  }
  calculateEligibility(form:NgForm){
    this.eligibility=60*(0.6*this.monthlyincome);
    this.eligibility=Math.round(this.eligibility);
    this.flag2=true;
  }
  
  
  selectedSlice = 'none';
  chart: any;
  constructor(private zone: NgZone) {
    
  }

  // FusionCharts initialized listener to get the chart instance
  initialized($event){
    this.chart = $event.chart; // saving chart instance
  }

  // Change listener for radio buttons
  onRadioOptionChange(option){
    this.selectedSlice = option;
    // For each data element , see if it is selected, if none then slice in all elements
    this.dataSource.data.forEach((d, index) => {
      if(option == 'none'){
        this.chart.slicePlotItem(index, false);
      } else if(option === d.label.toLowerCase()){
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  // Get data item label
  getLabel(index){
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event){
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    })
  }

  ngOnInit() {
    setTimeout(() => { 
      
    })
  }
}
