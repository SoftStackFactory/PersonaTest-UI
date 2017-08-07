import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { TestSelectionComponent } from '../../components/test-selection/test-selection';

import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the OrganizationManagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organization-manage',
  templateUrl: 'organization-manage.html',
})
export class OrganizationManagePage {
  
  //Variables to store organization and user information
  organization: any = {}
  organizationName: string
  organizationLogo: any
  userEmail: string
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
      this.organizationName = "SoftStack Factory";
      this.organizationLogo = "placeholder";
      this.userEmail = "Peter@SoftStack.org";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationManagePage');
  }
<<<<<<< HEAD
<<<<<<< HEAD
  
  submitChanges(form) {
    //generate email requesting to administrator
    if(form.invalid) {
      console.log("No Change Email to send.")
      return alert("Please make changes before submitting.");
    } else {
      let email = {
        to: 'administrator',
        attachments: [
          'file://img/logo.png',
        ],
        subject: this.organizationName + ' Change Request',
        body: 'changes requested by ' + this.userEmail +
        '/n ',
        isHtml: true
      };
      console.log("Change Email Sent");
      this.navCtrl.push(LobbyPage);
      //return this.emailComposer.open(email);
    }
  }
  

  //home button at top right
  goHome() {
    this.navCtrl.push(LobbyPage);
=======
  submitChanges(form) {
    /*
    //generate email requesting to administrator
    if(form.invalid) {
      return alert("Please make changes before submitting.");
    }
    let email = {
      to: 'administrator',
      attachments: [
        'file://img/logo.png',
      ],
      subject: this.organizationLogo + ' Change Request',
      body: 'changes requested by ' + this.userEmail +
      '/n ',
      isHtml: true
    };
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the OrganizationManagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organization-manage',
  templateUrl: 'organization-manage.html',
})
export class OrganizationManagePage {
  organizationName: string
  organizationLogo: any
  userEmail: string
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer) {
      this.organizationName = "SoftStack Factory";
      this.organizationLogo = "placeholder";
      this.userEmail = "Peter@SoftStack.org";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationManagePage');
  }
=======
  
  submitChanges(form) {
    //generate email requesting to administrator
    if(form.invalid) {
      console.log("No Change Email to send.")
      return alert("Please make changes before submitting.");
    } else {
      let email = {
        to: 'administrator',
        attachments: [
          'file://img/logo.png',
        ],
        subject: this.organizationName + ' Change Request',
        body: 'changes requested by ' + this.userEmail +
        '/n ',
        isHtml: true
      };
      console.log("Change Email Sent");
      this.navCtrl.push(LobbyPage);
      return this.emailComposer.open(email);
    }
  }
  

  //home button at top right
  goHome() {
    this.navCtrl.push(LobbyPage);
  }
  
}
