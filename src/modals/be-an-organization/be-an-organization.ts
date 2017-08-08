import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'be-an-organization-modal',
  templateUrl: 'be-an-organization.html',
})
export class BeAnOrganizationModal {
  private orgRequestForm : FormGroup;
  

  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder) {
        this.orgRequestForm = this.formBuilder.group({
            name: ['', Validators.required],
            website: ['', Validators.required]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeAnOrganizationModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  logForm() {
      console.log(this.orgRequestForm.value)
  }

}
