import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

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

  constructor(public toastCtrl: ToastController) {
    console.log('Hello RegistrationComponent Component');
  }
  showEula() {
  let toast = this.toastCtrl.create({
    message: 'Terms and Conditions placeholder',
    duration: 3000,
    showCloseButton: true,
    closeButtonText: "ok",
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  
  
}