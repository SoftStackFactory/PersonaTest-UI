import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { LobbyPage } from '../../pages/lobby/lobby';
import { EulaComponent } from '../eula/eula';


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
  user: any = {}
  eula: boolean
  
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
    ) {
    console.log('Hello Registration Component');
  }
  
  checkEula() {
    console.log("Terms and Conditions have been accepted", this.eula);
  }
  
  signupForm(form) {
    if(form.invalid) {
      return alert("Please fill in all fields.");
      
    } if(this.user.password !== this.user.confirmPassword) {
      //Passwords did not match, delete user passwords
      this.user.password = null;
      this.user.confirmPassword = null;
      return alert("Your passwords did not match. Please re-enter your passwords");
      
    } if(this.eula !== true) {
      //User must agree to terms and conditions before registering
      return alert("Please check the box to agree to our Terms and Conditions");
    }
    
    //successfull registration
    delete this.user.confirmPassword;
    console.log(this.user);
    
    // Navigate to lobby
    this.navCtrl.setRoot(LobbyPage);
  }

  showEula() {
    let modal = this.modalCtrl.create(EulaComponent);
    modal.present();
  }
}
