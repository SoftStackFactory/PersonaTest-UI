import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { OrganizationProvider } from '../../providers/organization/organization';

@Component({
  selector: 'be-an-organization-modal',
  templateUrl: 'be-an-organization.html',
})
export class BeAnOrganizationModal {
  private orgRequestForm : FormGroup;
  alertTitle: string
  alertSubtitle: string

  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private alertCtrl: AlertController,
      private org: OrganizationProvider) {
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
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  logForm() {
      console.log(this.orgRequestForm.value)
      /*
      this.org.becomeOrg(window.localStorage.getItem('userId'),
          this.orgRequestForm.value.name,
          this.orgRequestForm.value.website)
          */
      this.org.becomeOrg(window.localStorage.getItem('token'))
        .map(res => res.json())
        .subscribe(res => {
          this.alertTitle = "Organization Request sent",
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

}
