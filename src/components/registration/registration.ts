import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

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
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
    ) {
    console.log('Hello Registration Component');
  }
  
  user: any = {}
  eula: boolean;
  
  showEula() {
    
  }
  
  signupForm(form) {
    if(form.invalid) {
      return alert("Please fill in all fields.");
    } if(this.user.password !== this.user.confirmPassword) {
      //Passwords did not match, delete user passwords
      this.user.password = null;
      this.user.confirmPassword = null;
      return alert("Your passwords did not match. Please re-enter your passwords");
    } if(this.eula == false) {
      //User must agree to terms and conditions before registering
      return alert("Please check the box to agree to our Terms and Conditions");
    }
    delete this.user.confirmPassword;
    console.log(this.user);
    // Navigate to lobby
    this.navCtrl.setRoot(LobbyPage);
  }

  
}
