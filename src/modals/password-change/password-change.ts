import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppUser } from '../../providers/app-user';

@Component({
  selector: 'password-change-modal',
  templateUrl: 'password-change.html',
})
export class PasswordChangeModal {
  private changeRequestForm : FormGroup;
  user: any = {}
  password: any = {}
  alertTitle: string
  alertSubtitle: string
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private alertCtrl: AlertController,
      private appUser: AppUser) {
        this.changeRequestForm = this.formBuilder.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.required],
            confirmNewPassword: ['', Validators.required]
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
  
  passwordReset(form) {
    console.log(this.changeRequestForm.value)
    if(form.invalid) {
      this.alertTitle = "Invalid Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();

    //Passwords did not match, delete user passwords
    } else if(this.user.newPassword !== this.user.confirmNewPassword) {
      this.user.oldPassword = null;
      this.user.newPassword = null;
      this.user.confirmNewPassword = null;
      this.alertTitle = "Passwords do not match";
      this.alertSubtitle = "Please re-enter your passwords.";
      return this.showAlert();
    }
    
    //successfull password form
    
    //verify old password with api call
    
    
    //submit new password
    this.password = { "password" : this.user.newPassword };    
    this.appUser.changePassword(window.localStorage.getItem('token'), 
        this.password)
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