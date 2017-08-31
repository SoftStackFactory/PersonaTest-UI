import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppUserProvider } from '../../providers/app-user/app-user';

@Component({
  selector: 'password-change-modal',
  templateUrl: 'password-change.html',
})
export class PasswordChangeModal {
  private changeRequestForm : FormGroup;
  user: any = {};
  password: any = {};
  alertTitle: string;
  alertSubtitle: string;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private alertCtrl: AlertController,
      private appUser: AppUserProvider) {
        this.changeRequestForm = this.formBuilder.group({
            oldPassword: ['', Validators.required],
            password: ['', Validators.required],
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
  
  passwordChange(form) {
    console.log("form", this.changeRequestForm.value)
    if(form.invalid) {
      this.alertTitle = "Invalid Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();

    //Passwords did not match, delete user passwords
    } else if(this.user.newPassword !== this.user.confirmNewPassword) {
      this.user.oldPassword = null;
      this.user.password = null;
      this.user.confirmPassword = null;
      this.alertTitle = "Passwords do not match";
      this.alertSubtitle = "Please re-enter your passwords.";
      return this.showAlert();
    }
    
    //successfull password form
    
    //verify old password with api call
    
    
    //submit new password
    console.log("user data", this.user);
    delete this.user.oldPassword;
    delete this.user.confirmPassword;
    console.log("user data to send", this.user);
    //this.password = { "password" : this.user.password };    
    this.appUser.changePassword(window.localStorage.getItem('id'),
      window.localStorage.getItem('token'), 
        this.user)
      .map(res => res.json())
      .subscribe(res => {
        this.alertTitle = "Password Change",
        this.alertSubtitle = "You password has been changed successfully",
        this.showAlert();
        return this.viewCtrl.dismiss();
        
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