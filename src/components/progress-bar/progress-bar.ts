import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
  @Input() totalQuestionNum: number;
  @Input() questionNum: number;
  displayProgress(totalNum: number, currentNum: number) {
    let styles = {
      'background-color': '#18314f',
      'width': `${currentNum/(totalNum/50)}vw`,
      'height': '33px',
      'border-radius': '2px',
      'opacity': '0.3'
    }
    return styles;
  }

}
