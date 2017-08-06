import { Component } from '@angular/core';

/**
 * Generated class for the TestSelectionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-selection',
  templateUrl: 'test-selection.html'
})
export class TestSelectionComponent {

  text: string;

  constructor() {
    console.log('Hello TestSelectionComponent Component');
    this.text = 'Hello World';
  }

}
