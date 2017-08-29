import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import { HistoryPage } from '../history/history';
import { QuestionPage } from '../question/question';


import { ForWorkModal } from '../../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../../modals/be-an-organization/be-an-organization';
import { ManageAccountModal } from '../../modals/manage-account/manage-account';
import { LoadingControllerModal } from '../../modals/loading-controller/loading-controller'
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
  //used for ionic spinner only:
  //pageLoading: Boolean = true
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {
      this.testType = "personal";
      this.organizationName = "SoftStack Factory";
      this.userName = "Peter";
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    //used for ionic spinner only:
    //setTimeout( ()=> {this.pageLoading=false}, 3000);
    
    // let loading = this.loadingCtrl.create({
    //   spinner: "dots",
    //   duration: 5000
    // });
    
    // loading.onDidDismiss(() => {
    //   console.log("Dismissed loading");
    // });
    
    // loading.present();
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
    let manageAccModal = this.modalCtrl.create(ManageAccountModal);
    manageAccModal.present();
  }
  becomeOrg() {
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  }
}
