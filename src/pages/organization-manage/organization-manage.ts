import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { ToastController } from 'ionic-angular';

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
  
  //Variables for organization and user information
  organization: any = {}
  organizationName: string
  organizationLogo: any
  userEmail: string
  
  //Variable to store our array of test as an array of objects; Currently using mock data
  availableTests: { name: string, description: string }[] = 
  [{name: "Goldberg's Big Five", description: "some text"}, 
  {name:"Markey and Markey's", description: "some text"},
  {name: "Costa and McCrae's NEO Facets", description: "some text"},
  {name:"Johnson's 120 Item NEO", description: "some text"}];
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    public toastCtrl: ToastController) {
      this.organizationName = "SoftStack Factory";
      this.organizationLogo = "placeholder";
      this.userEmail = "Peter@SoftStack.org";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationManagePage');
  }
  
  //display descriptions of available tests
  testDetails() {
    let toast = this.toastCtrl.create({
      message: "test descriptions",
      showCloseButton: true,
      closeButtonText: "ok",
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

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
      return this.emailComposer.open(email);
    }
    
    //this.navCtrl.push(LobbyPage);
  }
  

  //home button at top right
  goHome() {
    this.navCtrl.push(LobbyPage);
  }
  
}
