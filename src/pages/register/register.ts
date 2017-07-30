import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  presentEula() {
    let toast = this.toastCtrl.create({
      message: 'Terms and Conditions placeholder',
      showCloseButton: true,
      closeButtonText: 'ok'
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
