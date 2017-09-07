import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

// Pages
import { HistoryPage } from '../history/history';
import { QuestionPage } from '../question/question';
<<<<<<< HEAD
=======

>>>>>>> feature/LobbyNav

// Modals
// import { ForWorkModal } from '../../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../../modals/be-an-organization/be-an-organization';
import { ManageAccountModal } from '../../modals/manage-account/manage-account';

// Providers
import { ResultsProvider } from '../../providers/results/results';
import { AnswersProvider } from '../../providers/answers/answers';
import { TestHistoryProvider } from '../../providers/test-history/test-history';

@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {
  TEST: any;
  testType: string;
  testSelected: string;
  organizationName: string;
  orgSelected: string;
  ID: any;
  userName: string;
  user: string;
  hasHistory: boolean;
  hasIncompleteTest: boolean;
  recentTestId: any;
  count: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public menuCtrl: MenuController,
    public resultsProvider: ResultsProvider,
    public answersProvider: AnswersProvider,
    public viewCtrl: ViewController,
    public testHistoryProvider: TestHistoryProvider
  ) {
      this.testType = "personal";
      this.organizationName = "SoftStack Factory";
      this.userName = "Peter";
      this.ID = window.localStorage.getItem('userId');
      this.testSelected = null;
      this.orgSelected = null;
      this.hasHistory = this.userHasHistory();
      this.hasIncompleteTest = this.userHasIncompleteTest();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    
  }

  userHasHistory() {
    console.log('this should get the users history and return true or false');
    return false;
  }
  
  userHasIncompleteTest() {
    console.log('this should return true if they have a recent TestTaken with less than 50(total test questions) answers');
    let countOfTestsTaken;
    this.testHistoryProvider.hasTestHistory(this.ID)
    .subscribe(
      res => {
        console.log("hasTestHistory response ", res);
        countOfTestsTaken = res.count;
      }, 
      error => {
        console.log("error ", error);
      },
      () => {
        if (countOfTestsTaken > 0){
        this.testHistoryProvider.getMostRecentTestTakenIdByUserId(this.ID)
        .subscribe(
        testId => {
          if (testId != []){
            console.log("testId ", testId);
            console.log("this.recentTestId ", this.recentTestId);
            this.recentTestId = testId[0].userId;
            console.log("most recent test", this.recentTestId);
          } else {
            this.recentTestId = [{}];
          }
        }, error => {
          console.log(error);
        },
        () =>  {
          console.log("done with first callback", this.recentTestId);
          this.testHistoryProvider.getAnswerCountByTestTakenId(this.recentTestId)
          .subscribe(
              res => {
                this.count = res.count;
              }, error => {
                console.log(error);
              },
              () => {
                console.log("done with second callback", this.count);
              }
            )
            console.log("last after");
      }
    )
        console.log("done with hasTestHistory callback");
      }})
      
    return (this.count < 50) ? true : false;
  }

  forWork() {
    //this should take into accout which organization, and test has been selected
    // this.navCtrl.push(QuestionPage, testSettings=>{orgSelected: SoftStackFactory, testSelected: Goldberg})
    this.navCtrl.push(QuestionPage);
    console.log("Switch to Work View");
    // let forWorkModal = this.modalCtrl.create(ForWorkModal);
    // forWorkModal.present();
  }
  
  resumeTest() {
    alert("This should put you back where you were in the test");
  }
  
  forPlay() {
<<<<<<< HEAD
    let testTaken = {
      // Hard coded ID, generated from the App user model in the backend
      // userId: "59a32e40a35bbc79d8931602",
      userId: this.ID,
      // Hard coded ID, generated from the test model in the backend
      // Eventually will reference each test's unique id
      testId: "59a323f32eb4c1781fd6c1e3",
      date: new Date(),
      Extraversion: 0,
      Agreeableness: 0,
      Conscientiousness: 0,
      'Emotional Stability': 0,
      Intellect: 0,
      name: "Goldberg"
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
   
   
=======
    this.navCtrl.push(QuestionPage);
    console.log("Switch to Personal Test Selection Page");
>>>>>>> feature/LobbyNav
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