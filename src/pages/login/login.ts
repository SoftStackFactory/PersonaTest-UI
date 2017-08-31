import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LobbyPage } from '../lobby/lobby';
import { RegisterPage } from '../register/register';

import { AppUserProvider } from '../../providers/app-user/app-user';

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
  
  loginForm: FormGroup;
  alertTitle: string;
  alertSubtitle: string;
  submitAttempt: boolean = false;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private menu: MenuController,
    private appUser: AppUserProvider,
    private formBuilder: FormBuilder

    ) {
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        password: ['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  submit(){
    this.submitAttempt = true;
    
    if(!this.loginForm.valid){
      this.alertTitle = "Incomplete Login";
      this.alertSubtitle = "Please enter your email and password.";
      return this.showAlert();
    }
    //successful login
    console.log("User Credentials", this.loginForm.value);
    this.appUser.login(this.loginForm.value)
      .map(res => res.json())
      .subscribe(res => {
        console.log("hit", res);
        window.localStorage.setItem('token', res.id);
        window.localStorage.setItem('userId', res.userId)
        this.navCtrl.setRoot(LobbyPage);
        
      }, error => {
        //Server side errors
        if (error.status === 404) {
          this.alertTitle = "404";
          this.alertSubtitle = "Not Found.";
          return this.showAlert();
        
        } else if(error.status === 401) {
          this.alertTitle = "Invalid Login";
          this.alertSubtitle = "Incorrect email or password. Please try again."
          return this.showAlert();
          
        } else if (error.status === 422) {
          this.alertTitle = "422";
          this.alertSubtitle = "Invalid email address";
          return this.showAlert();
          
        } else if (error.status === 500) {
          this.alertTitle = "500";
          this.alertSubtitle = "Server is currently offline, please try again in a few minutes.";
          return this.showAlert();
        }    
      });
    
  }
  
  //user has not created an account yet, link to Registration
  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }
  
}
