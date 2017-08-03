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

  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationBecomePage');
  }
  showEula() {
    alert("Terms and Conditions Placeholder");
  }
  requestOrg() {
    this.navCtrl.push(LobbyPage);
  }
}
