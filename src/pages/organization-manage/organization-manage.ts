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
    */
    this.navCtrl.push(LobbyPage);
  }
  goHome() {
    this.navCtrl.push(LobbyPage);
  }
  
}
