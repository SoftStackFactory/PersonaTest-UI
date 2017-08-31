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
   
  test: any = { Agreeableness: 55, Conscientiousness: 73, ES: 35, Extraversion: 40, Intellect: 85  }; 
  miniChart: any;

  constructor() {
    console.log('Hello MiniGraphComponent Component');
  
  }

  //Since a component doesn't have a view, we use angular's ngOnInit method 
  ngOnInit(){
    this.miniChart = new Chart(this.graphCanvas.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
            "Agreeableness",
            "Conscientiousness",
            "Emotional Stability",
            "Extraversion",
            "Intellect"
          ],
        datasets: [{
          data: [
            this.test.Agreeableness,
            this.test.Conscientiousness,
            this.test.ES,
            this.test.Extraversion,
            this.test.Intellect
          ],
          backgroundColor: ['rgba(139, 190, 178, 1)', //Teal (our light theme color)
          'rgba(231, 101, 122, 1)', //Pink
          'rgba(169, 174, 178, 1)', //Gray
          'rgba(179, 236, 156, 1)', //Green
          'rgba(245, 223, 132, 1)' //Yellow
          ]
     
        }]
      },
      options: {
        scales: {
          yAxes: [{
             display: false
          }],
         xAxes: [{
            display: false
          }]
        },
        legend: {
          display: false
       },
       tooltips: {
          enabled: false
       },
       scale:  {
            ticks: {
                display: false
            }
        }
      }
    });
  }
}
