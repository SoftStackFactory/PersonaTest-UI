import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the OrganizationBecomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organization-become',
  templateUrl: 'organization-become.html',
})
export class OrganizationBecomePage {
  organization: any = {}
  userEmail: string
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationBecomePage');
  }
  showEula() {
    alert("Terms and Conditions Placeholder");
  }
  requestOrg(form) {
    let email = {
      to: 'administrator',
      subject: "New Organization Request, " + this.organization.name,
      body: "Organization Name: " + this.organization.name + 
        "/n Organization Webpage: " + this.organization.webPage +
        "/n Submitted by: " + this.userEmail,
      isHtml: true
    }
   // this.emailComposer.open(email);
    this.navCtrl.push(LobbyPage);
  }
  goHome() {
    this.navCtrl.push(LobbyPage);
  }
}
