import { Component } from '@angular/core';

import { LobbyPage } from '../../pages/lobby/lobby';
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
  
  // registration(registrationinput) {
  //   console.log("Here's where the backend registration would happen");
  //   this.navCtrl.push(LobbyPage);
  // }

}
