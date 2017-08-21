import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppUser } from '../../providers/app-user';

@Component({
  selector: 'password-reset-modal',
  templateUrl: 'password-reset.html',
})
export class PasswordResetModal {
  private resetRequestForm : FormGroup;
  user: any = {}
  alertTitle: string
  alertSubtitle: string
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private alertCtrl: AlertController,
      private appUser: AppUser) {
        this.resetRequestForm = this.formBuilder.group({
            newPassword: ['', Validators.required],
            oldPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  logForm() {
      console.log(this.resetRequestForm.value)
  }
  
  
  passwordReset(form) {
    if(form.invalid) {
      this.alertTitle = "Invalid Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();
      
      //Passwords did not match, delete user passwords
    } else if(this.user.password !== this.user.confirmPassword) {
      this.user.password = null;
      this.user.confirmPassword = null;
      this.alertTitle = "Passwords do not match";
      this.alertSubtitle = "Please re-enter your passwords.";
      return this.showAlert();
    }
    
    //successfull registration
    delete this.user.confirmPassword;
    console.log(this.user);
    this.appUser.changePassword(window.localStorage.getItem('id'), 
        window.localStorage.getItem('token'), 
        this.user.oldPassword,
        this.user.newPassword)
      .map(res => res.json())
      .subscribe(res => {
        this.viewCtrl.dismiss();
        
      }, error => {
        //Server side errors
        if (error.status === 404) {
          this.alertTitle = "404";
          this.alertSubtitle = "Not Found.";
          return this.showAlert();
          
        } else if (error.status === 500) {
          this.alertTitle = "500";
          this.alertSubtitle = "Server is currently offline, please try again in a few minutes.";
          return this.showAlert();
        }    
      });
  }
  
}
  
