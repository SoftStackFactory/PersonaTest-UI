import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

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
  testType: string;
  organizationName: string;
  userName: string;
  user: string;
  TEST: any;
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public menuCtrl: MenuController,
    public resultsProvider: ResultsProvider,
    public  viewCtrl: ViewController
  ) {
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

    let testTaken = {
      // Hard coded ID, generated from the App user model in the backend
      userId: "59a32e40a35bbc79d8931602",
      // Hard coded ID, generated from the test model in the backend
      // Eventually will reference each test's unique id
      testId: "59a323f32eb4c1781fd6c1e3",
      date: new Date(),
      Extraversion: 0,
      Agreeableness: 0,
      Conscientiousness: 0,
      'Emotional Stability': 0,
      Intellect: 0
    };
    this.resultsProvider.initializeTest(testTaken)
      .subscribe(
        test => {
          this.TEST = test
          console.log("Initalized Test", this.TEST);
          
        }, error => {
          console.log(error);
        },
       () =>  this.navCtrl.push(QuestionPage, {testTaken: this.TEST} )
        
      )
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