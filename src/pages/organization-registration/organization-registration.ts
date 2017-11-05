import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OrganizationProvider } from '../../providers/organization/organization';

import { LobbyPage } from '../lobby/lobby';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private organization: OrganizationProvider
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

  submit(){
    this.submitAttempt = true;
    console.log("Org Info", this.orgRegForm.value)
    let userId = window.localStorage.getItem('userId');
    console.log(window.localStorage.getItem('userId'))
    this.orgRegForm.value.userId = userId;
    
    this.organization.register(this.orgRegForm.value)
    .map(res => res.json())
    .subscribe( res => {
      this.navCtrl.setRoot(LobbyPage);
    }, error => {
      
    })
    
    
  }
}
