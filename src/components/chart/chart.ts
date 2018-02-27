import { Component, ViewChild, ElementRef, Input, AfterContentInit  } from '@angular/core';
import  { Chart }  from 'chart.js';
import {TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent implements AfterContentInit {
  @ViewChild('chartCanvas') chartCanvas: ElementRef
  @Input("gradedTest") gradedTest: any;
  polarChart: any;
  radarChart: any;
  agreeableness: any;
  conscientousness: any;
  emotionalStability: any;
  extraversion: any;
  intellect: any;
  constructor(
  private translate: TranslateService ) {}
  
  
  
  ngAfterContentInit() {
    
    //save results nav params to a static variable

    const testResults = this.gradedTest;
    
    //create a new object with only test Categories
    const testCategories = testResults.category;
    console.log("testCategories", testCategories);
    
    //access test date
    const testDate = testResults.date;
    console.log("testDate, testDate");
    
    //returns only keys of the test categories obj
    let labels = Object.keys(testCategories);
    console.log("labels", labels);
    
    //returns only values of the test categories obj
    let values = Object.values(testCategories);
    console.log("values", values);

    
    
    this.translate.get('LABEL.AGREEABLENESS').subscribe((res:any)=> {
      this.agreeableness= res;
        });
        this.translate.get('LABEL.CONSCIENTOUSNESS').subscribe((res:any)=> {
      this.conscientousness= res;
        });
        this.translate.get('LABEL.EMOTIONALSTABILITY').subscribe((res:any)=> {
      this.emotionalStability= res;
        });
        this.translate.get('LABEL.EXTRAVERSION').subscribe((res:any)=> {
      this.extraversion= res;
        });
        this.translate.get('LABEL.INTELLECT').subscribe((res:any)=> {
      this.intellect= res;
        });
// Radar Chart can be used to compare multiple tests/users
// passing in categories' labels and values
    
    this.radarChart = new Chart(this.chartCanvas.nativeElement, {
      type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Test #1",
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBorderColor: "#fff",
          pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: values
        }
      ]
    },
        options: {
          responsive: true,
              maintainAspectRatio: true,
              scale: {
                  ticks: {
                      beginAtZero: true,
                      stepSize: 3,
                      callback: function() {
								        return '';
                      }
                  }
              },
        title: {
          display: true,
          text: testDate
        }
      }
    });
    
  }
  
      // this.polarChart = new Chart(this.polarCanvas.nativeElement, {
    //   type: 'polarArea',
    //   data: {
    //     labels: [
    //       "Agreeableness",
    //       "Conscientiousness",
    //       "Emotional Stability",
    //       "Extraversion",
    //       "Intellect"
    //       ],
    //     datasets: [{
    //       data: [
    //         this.gradedTest["Agreeableness"], 
    //         this.gradedTest["Conscientiousness"], 
    //         this.gradedTest["Emotional Stability"], 
    //         this.gradedTest["Extraversion"], 
    //         this.gradedTest["Intellect"]
    //         ],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255,99,132,1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)'
    //       ]
    //     }]
    //   },
    //   options: {
    //     responsive: true,
    //     animation: {
    //       animationScale: true
    //     },
    //     scale: {
    //       ticks: {
    //         beginAtZero: true,
    //         stepSize: 5,
    //       }
    //     }
    //   }
    // });

}