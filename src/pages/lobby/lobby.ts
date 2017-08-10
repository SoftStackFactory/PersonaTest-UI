import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { HistoryPage } from '../history/history';
import { QuestionPage } from '../question/question';


import { ForWorkModal } from '../../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../../modals/be-an-organization/be-an-organization';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  testType: string
  organizationName: string
  userName: string
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    viewCtrl: ViewController) {
      this.testType = "personal";
      this.organizationName = "SoftStack Factory";
      this.userName = "Peter";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  forWork() {
    this.navCtrl.push(QuestionPage);
    console.log("Switch to Work View");
    let forWorkModal = this.modalCtrl.create(ForWorkModal);
    forWorkModal.present();
  }
  forPlay() {
    this.navCtrl.push(QuestionPage);
    console.log("Switch to Personal Test Selection Page");
  }
  showResults() {
    this.navCtrl.push(HistoryPage);
    console.log("go to results page for personal tests taken");
  }
  viewResults() {
     this.navCtrl.push(HistoryPage);
    console.log("go to results page for organization tests available to view");
  }
  manageAcc() {
    console.log("go to account management page");
  }
  becomeOrg() {
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  }
}