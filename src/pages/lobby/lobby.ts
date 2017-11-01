import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';

// Pages
import { HistoryPage } from '../history/history';
import { QuestionPage } from '../question/question';

// Components
import { TestSearchComponent } from '../../components/test-search/test-search';

// Modals
// import { ForWorkModal } from '../../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../../modals/be-an-organization/be-an-organization';
import { ManageAccountModal } from '../../modals/manage-account/manage-account';

// Providers
import { ResultsProvider } from '../../providers/results/results';
import { AnswersProvider } from '../../providers/answers/answers';
import { TestHistoryProvider } from '../../providers/test-history/test-history';
import { AppUserProvider } from '../../providers/app-user/app-user';

import { Observable } from 'rxjs/Observable';


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
  // user: string;
  hasHistory: boolean;
  hasIncompleteTest: boolean;
  recentTestId: any;
  count: any;
  user: Observable<any> = this.appUserProvider.getUser(window.localStorage.getItem("userId"), window.localStorage.getItem("token"));
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public menuCtrl: MenuController,
    public resultsProvider: ResultsProvider,
    public answersProvider: AnswersProvider,
    public viewCtrl: ViewController,
    public testHistoryProvider: TestHistoryProvider,
    public appUserProvider: AppUserProvider
  ) {
      this.testType = "personal";
      this.organizationName = "SoftStack Factory";
      this.userName = "Peter";
      this.ID = window.localStorage.getItem('userId');
      this.testSelected = null;
      this.orgSelected = null;
      this.hasHistory = this.userHasHistory();
      this.hasIncompleteTest = this.userHasIncompleteTest();
      console.log( "this.hasIncompleteTest ", this.hasIncompleteTest);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
    console.log("user", window.localStorage.getItem("user"))
  }

  userHasHistory() {
    console.log('this should get the users history and return true or false');
    return false;
  }
  
  userHasIncompleteTest() {
    console.log('this should return true if they have a recent TestTaken with less than 50(total test questions) answers');
    let rValue = null;
    this.testHistoryProvider.getMostRecentTestTakenIdByUserId(this.ID)
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
            console.log("testId[0].id ", testId[0].id);
            console.log("this.recentTestId ", this.recentTestId);
            this.recentTestId = testId[0].id;
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
                console.log("first subscribe count= ", this.count);
              }, error => {
                console.log(error);
              },
              () => {
                
                console.log("done with second callback", this.count);
                console.log("calculating whether or not they have another test ", this.count);
                rValue = (this.count < 50) ? true : false;
              }
            )
            console.log("last after");
      }
    )
        console.log("done with hasTestHistory callback");
      }})
      
    // return (this.count < 50) ? true : false;
    console.log("rValue ", rValue);
    return rValue;
  }
  
  resumeTest() {
    alert("This should put you back where you were in the test");
  }
  

  showResults() {
    this.navCtrl.push(HistoryPage);
    console.log("go to results page for personal tests taken");
  }
  
  viewResults() {
     this.navCtrl.push(HistoryPage);
    console.log("go to results page for organization tests available to view");
  }
}