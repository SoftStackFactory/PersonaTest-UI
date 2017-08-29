import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ModalController, MenuController, AlertController } from 'ionic-angular';
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

//menu elements
import { ManageAccountModal } from '../modals/manage-account/manage-account';
import { BeAnOrganizationModal } from '../modals/be-an-organization/be-an-organization';
import { AppUser } from '../providers/app-user';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any;
  @ViewChild(Nav) nav: Nav;
  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private appUser: AppUser) {
    platform.ready().then(() => {
      let storage = window.localStorage.getItem('remembered'); 
      if(storage === null){ 
        this.rootPage = LandingPage; 
        }else{ 
        this.rootPage = LobbyPage; }
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
    });
  };
  
  closeMenu(){
    
  };
  
  manageAcc(){
    console.log("go to account management page");
    let manageAccModal = this.modalCtrl.create(ManageAccountModal);
    manageAccModal.present();
  };
  
  becomeOrg(){
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  }

  
  logout(){
    let confirmLogout = this.alertCtrl.create({
      title: 'Confirm Logout',
      message: 'Are you sure you would like to logout? Any unsaved progress may be lost.',
      buttons: [
        {
          text: 'Yes, log me out',
          handler:() => {
            console.log("User has logged out");
            this.appUser.logout(window.localStorage.token)
            window.localStorage.clear();
            this.nav.setRoot(LandingPage);
          }
        },
        {
          text: 'No, keep me logged in',
          handler: () => {
            console.log("User cancelled logout");
          }
        }
        ]
    });
    confirmLogout.present();
  };

}

}

