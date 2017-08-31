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
  passwordToCheck: any = {};
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
    } else if(this.changeRequestForm.value.newPassword !== this.changeRequestForm.value.confirmNewPassword) {
      this.changeRequestForm.value.oldPassword = null;
      this.changeRequestForm.value.password = null;
      this.changeRequestForm.value.confirmPassword = null;
      this.alertTitle = "Passwords do not match";
      this.alertSubtitle = "Please re-enter your passwords.";
      return this.showAlert();
    }
    
    //successfull password form
    
    //verify old password with api call
    this.passwordToCheck = { "password": this.changeRequestForm.value.oldPassword };
    console.log("Old Password to Verify", this.passwordToCheck);
    this.appUser.checkPassword(window.localStorage.getItem('id'),
      window.localStorage.getItem('token'))
      .map(res => res.json())
      .subscribe(res => {
        
        //password entered matches old password on backend
        
        
        //passwords do not match
        
        
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
    
    //submit new password
    console.log("user provided data", this.changeRequestForm.value);
    delete this.changeRequestForm.value.oldPassword;
    delete this.changeRequestForm.value.confirmPassword;
    console.log("New Password to Send", this.changeRequestForm.value);
    //this.password = { "password" : this.user.password };    
    this.appUser.changeData(window.localStorage.getItem('id'),
      window.localStorage.getItem('token'), 
        this.changeRequestForm.value)
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