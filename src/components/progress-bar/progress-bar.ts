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
      'background-color': '#ddd',
      'width': `${currentNum}vw`,
      'height': '33px',
      'border-radius': '3px',
    }
    return styles;
  }

}
