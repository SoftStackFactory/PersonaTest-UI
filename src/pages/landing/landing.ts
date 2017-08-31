import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage }   from '../register/register';
import { LoginPage }      from '../login/login';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  
Register(){
    this.navCtrl.push(RegisterPage);
  }
 Login(){
    this.navCtrl.push(LoginPage);
}
}
