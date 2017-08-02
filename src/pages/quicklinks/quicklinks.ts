import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { LandingPage }    from '../landing/landing';
import { HomePage }       from '../home/home';
import { RegisterPage }   from '../register/register';
import { LoginPage }      from '../login/login';
import { LobbyPage }      from '../lobby/lobby';
import { TestListsPage }  from '../test-lists/test-lists';
import { ResultsPage }    from '../results/results';
import { QuestionPage }   from '../question/question';
import { FlexDemoPage }   from '../flex-demo/flex-demo';
/**
 * Generated class for the QuicklinksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
  let listofPages: any[] = [
    LandingPage,
    HomePage,
    RegisterPage,
    LoginPage,
    LobbyPage,
    TestListsPage,
    ResultsPage,
    QuestionPage,
    FlexDemoPage
    ]
@Component({
  selector: 'page-quicklinks',
  templateUrl: 'quicklinks.html',
})
export class QuicklinksPage {
  pages: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = listofPages;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuicklinksPage');
  }
  
  goTo(page) {
    this.navCtrl.push(page);
  }

}
