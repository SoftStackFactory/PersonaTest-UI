import { Component } from '@angular/core';

/**
 * Generated class for the Logout component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class Logout {

  text: string;

  constructor() {
    console.log('Hello Logout Component');
    this.text = 'Hello World';
  }

}
