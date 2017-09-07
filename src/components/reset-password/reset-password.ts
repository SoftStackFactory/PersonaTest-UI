import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ResetPasswordComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordComponent {
  private newPasswordForm : FormGroup;
  user: any = {}
  alertTitle: string
  alertSubtitle: string
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private alertCtrl: AlertController) {
        this.newPasswordForm = this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
      }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
}
