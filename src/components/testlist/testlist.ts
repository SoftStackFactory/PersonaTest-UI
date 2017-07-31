import { Component } from '@angular/core';

/**
 * Generated class for the TestlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'testlist',
  templateUrl: 'testlist.html'
})
export class TestlistComponent {

  text: string;

  constructor() {
    console.log('Hello TestlistComponent Component');
    this.text = 'Hello World';
  }

}
