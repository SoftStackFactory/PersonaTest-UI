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
   
  test: any = { Avoiding: 35, Accommodating: 73, Collaborating: 85, Compromising: 40, Competing: 35  }; 
  miniChart: any;

  constructor() {
    console.log('Hello MiniGraphComponent Component');
  
  }

  //Since a component doesn't have a view, we use angular's ngOnInit method 
  ngOnInit(){
    this.miniChart = new Chart(this.graphCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [
            'Avoiding',
            'Accommodating',
            'Compromising',
            'Competing',
            'Collaborating'
          ],
        datasets: [{
          data: [
            this.test.Avoiding,
            this.test.Accommodating,
            this.test.Compromising,
            this.test.Competing,
            this.test.Collaborating
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              max: 100
            }
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
       }
      }
    });
  }
}
