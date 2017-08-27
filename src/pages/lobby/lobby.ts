import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

// Pages
import { HistoryPage } from '../history/history';
import { QuestionPage } from '../question/question';

// Modals
import { ForWorkModal } from '../../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../../modals/be-an-organization/be-an-organization';
import { ManageAccountModal } from '../../modals/manage-account/manage-account';

// Providers
import { ResultsProvider } from '../../providers/results/results';


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
    public resultsProvider: Provider
    viewCtrl: ViewController) {
      this.testType = "personal";
      this.organizationName = "SoftStack Factory";
      this.userName = "Peter";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }

  forWork() {
    this.resultsProvider.initializeTest();
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
    let manageAccModal = this.modalCtrl.create(ManageAccountModal);
    manageAccModal.present();
  }
  becomeOrg() {
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  }
}