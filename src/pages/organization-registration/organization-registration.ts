import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OrganizationProvider } from '../../providers/organization/organization';

import { LobbyPage } from '../lobby/lobby';

// import { NameValidator } from '../../validators/name';

/**
 * Generated class for the OrganizationRegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organization-registration',
  templateUrl: 'organization-registration.html',
})
export class OrganizationRegistrationPage {
  orgRegForm: FormGroup;
  submitAttempt: boolean = false;
  alertTitle: string;
  alertSubtitle: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private organization: OrganizationProvider,
    private alertCtrl: AlertController
    ) {
      this.orgRegForm = formBuilder.group({
        name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        ownerId: [''],
        description: ['',Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationRegistrationPage');
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  submit(){
    this.submitAttempt = true;
    let userId = window.localStorage.getItem('userId')
    this.orgRegForm.value.userId = userId;
    console.log("Org Info", this.orgRegForm.value)
    
    this.organization.register(this.orgRegForm.value)
    .map(res => res.json())
    .subscribe( res => {
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
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
