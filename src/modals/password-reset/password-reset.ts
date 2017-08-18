import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'password-reset-modal',
  templateUrl: 'password-reset.html',
})
export class PasswordResetModal {
  private orgRequestForm : FormGroup;
  

  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder) {
        /*this.orgRequestForm = this.formBuilder.group({
            name: ['', Validators.required],
            website: ['', Validators.required]
        }); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  logForm() {
      console.log(this.orgRequestForm.value)
  }

}
