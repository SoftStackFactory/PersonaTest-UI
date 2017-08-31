import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'manage-account-modal',
  templateUrl: 'manage-account.html',
})
export class ManageAccountModal {
  private accountChangeForm : FormGroup;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private translate: TranslateService) {
        this.accountChangeForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            age: [''],
            gender: [''],
            password: ['', Validators.minLength(4)]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeAnOrganizationModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  logForm() {
      console.log(this.accountChangeForm.value)
  }
setLanguage(lng){
  this.translate.use(lng);
}

}
