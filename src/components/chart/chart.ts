import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent {
  @ViewChild('polarCanvas') polarCanvas: ElementRef
  polarChart: any;


  ngOnInit() {
    this.polarChart = new Chart(this.polarCanvas.nativeElement, {
      type: 'radar',
    data: {
      labels: [
          "Agreeableness",
          "Conscientiousness",
          "Emotional Stability",
          "Extraversion",
          "Intellect"
          ],
      datasets: [
        {
          label: "Test #1",
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBorderColor: "#fff",
          pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
          data: [40, 50, 20, 30, 10]
        }, {
          label: "Test #2",
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointBorderColor: "#fff",
          pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
          data: [20, 30, 50, 10, 40]
        }
      ]
    },
       options: {
        title: {
          display: true,
          text: 'IPIP Test Results'
        }
      }
    });
    
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
    //         40,10,20,30,10 // Mock data until test results start being generated, saved and passed as paramaters
            
    //         // this.test["Extraversion"], 
    //         // this.test["Agreeableness"], 
    //         // this.test["Conscientiousness"], 
    //         // this.test["Emotional Stability"], 
    //         // this.test["Intellect"]
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
    //         max: 50
    //       }
    //     }
    //   }
    // });
    
  }

}