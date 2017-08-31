import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AppUserProvider } from '../../providers/app-user/app-user';


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
      private appUser: AppUserProvider
    ) {
        this.resetRequestForm = this.formBuilder.group({
            email: ['', Validators.required]
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
    console.log(this.resetRequestForm.value)
    if(form.invalid) {
      this.alertTitle = "Invalid Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();
    }
    
    //successfull password change
    let confirmReset = this.alertCtrl.create({
      title: 'Confirm Password Reset',
      message: 'Are you sure you would like to reset your password?',
      buttons: [
        {
          //when user does want to reset their password
          text: 'Yes, reset my password',
          handler:() => {
            this.appUser.resetPassword(this.resetRequestForm.value)
            .map(res => res.json())
            .subscribe(res => {
              this.alertTitle = "Password reset requested",
              this.alertSubtitle = "Check your email for further instructions",
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
            })
          }
        },
        {
          //when user does not want to reset password
          text: 'No, keep my current password',
          handler: () => {
            console.log("User cancelled reset");
          }
        }
      ]
    });
    confirmReset.present();
  }
  
}
  
/*
//show password reset form
  app.get('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      redirectUrl: '/api/users/reset-password?access_token='+
        req.accessToken.id
    });
*/