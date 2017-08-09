import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user: any = {}
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  loginForm(form){
    if(form.invalid) {
      return alert("Please fill in all fields.")
    }
    
    //successful login
    console.log(this.user);
    this.navCtrl.setRoot(LobbyPage);
  }
  
  //user has not created an account yet, link to Registration
  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
  
}
