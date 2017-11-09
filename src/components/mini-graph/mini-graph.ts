import { Component, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { TranslateService } from '@ngx-translate/core'

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

  constructor(
    private translate: TranslateService ) {
    console.log('Hello MiniGraphComponent Component');
  }

  //Since a component doesn't have a view, we use angular's ngOnInit method 
  ngAfterContentInit() {
    
    //save results nav params to a static variable
    // const testResults = this.gradedTest;
    const testResults = this.testResults;
    //create a new object with only test Categories
    const testCategories = testResults.category;
    console.log("testCategories", testCategories);
    
    //returns only keys of the test categories obj
    let labels = Object.keys(testCategories);
    console.log("labels", labels);
    
    //returns only values of the test categories obj
    let values = Object.values(testCategories);
    console.log("values", values);

    
    // // Radar Chart can be used to compare multiple tests/users
    // this.translate.get('LABEL.AGREEABLENESS').subscribe((res:any)=> {
    //   this.agreeableness= res;
    //     });
    //     this.translate.get('LABEL.CONSCIENTOUSNESS').subscribe((res:any)=> {
    //   this.conscientousness= res;
    //     });
    //     this.translate.get('LABEL.EMOTIONALSTABILITY').subscribe((res:any)=> {
    //   this.emotionalStability= res;
    //     });
    //     this.translate.get('LABEL.EXTRAVERSION').subscribe((res:any)=> {
    //   this.extraversion= res;
    //     });
    //     this.translate.get('LABEL.INTELLECT').subscribe((res:any)=> {
    //   this.intellect= res;
    //     });
    this.test = this.testResults;
    this.miniChart = new Chart(this.graphCanvas.nativeElement, {
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
                      stepSize: 2,
                      callback: function() {
								        return '';
                      }
                  }
              },
        title: {
          display: true,
          text: 'IPIP Test Results'
        }
      }
    });//closing of new Chart expression
    
    this.miniChart.options.legend.display = false;
    
  }//closes ngOnInit function

}//close of MiniGraph Component class
