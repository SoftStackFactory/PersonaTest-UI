import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { HomePage } from '../pages/home/home';
import { LobbyPage } from '../pages/lobby/lobby';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { FlexDemoPage } from '../pages/flex-demo/flex-demo';
import { LandingPage } from '../pages/landing/landing';
import { ResultsPage } from '../pages/results/results';
import { HistoryPage } from '../pages/history/history';
import { OrganizationManagePage } from '../pages/organization-manage/organization-manage';
import { OrganizationBecomePage } from '../pages/organization-become/organization-become';
import { QuicklinksPage } from '../pages/quicklinks/quicklinks';
import { LobbyOrganizationPage } from '../pages/lobby-organization/lobby-organization';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = QuicklinksPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
