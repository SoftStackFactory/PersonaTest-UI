import { Component } from '@angular/core';

/**
 * Generated class for the RegistrationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {

  text: string;

  constructor() {
    console.log('Hello RegistrationComponent Component');
    this.text = 'Hello World';
  }

}
