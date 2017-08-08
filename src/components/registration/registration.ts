import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { LobbyPage } from '../../pages/lobby/lobby';
import { LoginPage } from '../../pages/login/login';
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
    console.log("User has agreed to Terms & Conditions", this.eula);
  }
  
  signupForm(form) {
    if(form.invalid) {
      return alert("Please fill in all fields.");
      
      //Passwords did not match, delete user passwords
    } if(this.user.password !== this.user.confirmPassword) {
      this.user.password = null;
      this.user.confirmPassword = null;
      return alert("Your passwords did not match. Please re-enter your passwords");
      
       //User must agree to terms and conditions before registering
    } if(this.eula !== true) {
      return alert("Please check the box to agree to our Terms and Conditions");
    }
    
    //successfull registration
    delete this.user.confirmPassword;
    console.log(this.user);
    
    // Navigate to lobby
    this.navCtrl.setRoot(LobbyPage);
  }
  
  //When user clicks 'Terms and Conditions', display EULA through modal
  showEula() {
    let modal = this.modalCtrl.create(EulaComponent);
    modal.present();
  }
  
  //User already has account, navigate to login page
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
