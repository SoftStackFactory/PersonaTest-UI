import { Component } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
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
