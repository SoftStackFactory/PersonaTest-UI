import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController } from 'ionic-angular';

import { ResultsPage } from '../results/results';
import { ForWorkModal } from '../../modals/for-work/for-work';

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
    console.log("Switch to Work View");
    this.navCtrl.push(ForWorkModal);  
  }
  forPlay() {
    console.log("Switch to Personal Test Selection Page");
  }
  showResults() {
    this.navCtrl.push(ResultsPage);
    console.log("go to results page for personal tests taken");
  }
  viewResults() {
    console.log("go to results page for organization tests available to view");
  }
  manageAcc() {
    console.log("go to account management page");
  }
  becomeOrg() {
    console.log("go to Organization request page");
  }
}