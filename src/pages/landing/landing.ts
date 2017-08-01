import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { LobbyPage } from '../lobby/lobby'; //this is just for the login page flow hack

/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  login() {
    // this.navCtrl.push(Login); //this will eventually pull the Login page/component
    this.navCtrl.push(LobbyPage); //temporary navigation flow hack
  }
  
  signup() {
    this.navCtrl.push(RegisterPage);
  }
}
