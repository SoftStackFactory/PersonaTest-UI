import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { LandingPage } from '../../pages/landing/landing';

import { AppUser } from '../../providers/app-user';

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
export class LogoutComponent {


  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private appUser: AppUser
    ) {
      console.log('Hello Logout Component');
    }
  
  userLogout() {
    let confirmLogout = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you would like to logout? Any unsaved progress may be lost.',
      buttons: [
        {
          text: 'Yes, log me out',
          handler:() => {
            console.log("User has logged out");
            this.appUser.logout(window.localStorage.token)
            window.localStorage.clear();
            this.navCtrl.setRoot(LandingPage);
          }
        },
        {
          text: 'No, keep me logged in',
          handler: () => {
            console.log("User cancelled logout");
          }
        }
        ]
    });
    confirmLogout.present();
  }
}
