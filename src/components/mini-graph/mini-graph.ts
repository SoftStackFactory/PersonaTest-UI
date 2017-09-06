import { Component, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';


/**
 * Generated class for the MiniGraphComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'mini-graph',
  templateUrl: 'mini-graph.html'
})
export class MiniGraphComponent {

  @ViewChild('graphCanvas') graphCanvas;
  @Input() testResults: any; 
   
  test: any = {}; 
  miniChart: any;

  constructor() {
    console.log('Hello MiniGraphComponent Component');
  }

  //Since a component doesn't have a view, we use angular's ngOnInit method 
  ngOnInit(){
    this.test = this.testResults;
    this.miniChart = new Chart(this.graphCanvas.nativeElement, {
      type: 'radar',
      data: {
          //required property of radar chart, but we will input empty strings since we do not wnat to display labels
          labels: [
              "",
              "",
              "",
              "",
              ""
              ],
          datasets: [
            {
              backgroundColor: 'rgba(0, 153, 153, 0.2)',
              borderColor: 'rgba(0,132,132,0.8)',
              pointBorderColor: "#fff",
              pointBackgroundColor: 'rgba(0, 99, 132, 0.2)',
              data: [
                this.test["Agreeableness"], 
                this.test["Conscientiousness"], 
                this.test["Emotional Stability"], 
                this.test["Extraversion"], 
                this.test["Intellect"]
                ]
            }
          ]
        },
      options: {
              responsive: true,
              maintainAspectRatio: true,
              scale: {
                  ticks: {
                      beginAtZero: true,
                      max: 50,
                      stepSize: 10,
                      callback: function() {
								        return '';
                      }
                  }
              },
              title: {
                display: false
              },
            legend: {
              display: false
            }
      }
    });//closing of new Chart expression
    
    this.miniChart.options.legend.display = false;
    
  }//closes ngOnInit function

}//close of MiniGraph Component class
