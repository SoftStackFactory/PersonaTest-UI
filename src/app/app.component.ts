import { Component, ViewChild } from '@angular/core';
import { ToastController, Platform, Nav, ModalController, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgIf } from '@angular/common';

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
import { PasswordChangeModal } from '../modals/password-change/password-change';
import { PasswordResetModal } from '../modals/password-reset/password-reset';
import { SetLanguageModal } from '../modals/set-language/set-language';
import { BeAnOrganizationModal } from '../modals/be-an-organization/be-an-organization';
import { AppUserProvider } from '../providers/app-user/app-user';
import { TranslateService } from '@ngx-translate/core'




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  currentPage: string;
  rootPage: any;
  confirmDeleteTitle: any;
  confirmTwo: any;
  confirmDeleteText: any;
  confirmMessage: any;
  confirmDeleteTextTwo: any;
  logoutTitle: any;
  logoutMessage:any;
  logoutText:any;
  logoutTextTwo:any;
  
  @ViewChild(Nav) nav: Nav;
  constructor(
    platform: Platform, 
    splashScreen: SplashScreen,
    statusBar: StatusBar,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private appUser: AppUserProvider,
    private translate: TranslateService
  ) {
    platform.ready().then(() => {
      let storage = window.localStorage.getItem('remembered');
      let lng = window.localStorage.getItem('lng');
      if(storage === null){ 
         this.rootPage = LandingPage; 
      }else{ 
        this.rootPage = LobbyPage; }
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        this.translate.setDefaultLang('en');
    });

  };

  
  closeMenu(){
    this.menuCtrl.close();
  };
  
  goHome(){
    this.menuCtrl.close();
    this.nav.setRoot(LobbyPage);
  };
  
  manageAcc(){
    console.log("go to account management page");
    let manageAccModal = this.modalCtrl.create(ManageAccountModal);
    manageAccModal.present();
  };
  
  resetPassword(){
    console.log("password reset requested");
    let passwordResetModal = this.modalCtrl.create(PasswordResetModal);
    passwordResetModal.present();
  };
  
  changePassword(){
    console.log("password change requested");
    let passwordChangeModal = this.modalCtrl.create(PasswordChangeModal);
    passwordChangeModal.present();
  };
  
  setLanguage(){
    console.log("set language requested");
    let setLanguageModal = this.modalCtrl.create(SetLanguageModal);
    setLanguageModal.present();
  };

  becomeOrg(){
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  };
  
  deleteAcc(){
    
    //prompt user to confirm request to delete account
    this.translate.get('APPALERT.ALERTONE').subscribe((res:any)=> {
      this.confirmDeleteTitle= res;
        });
    this.translate.get('APPALERT.ALETWO').subscribe((res:any)=> {
      this.confirmTwo= res;
        });
    this.translate.get('APPALERT.TEXT').subscribe((res:any)=> {
      this.confirmDeleteText= res;
        });
    this.translate.get('APPALERT.MESSAGE').subscribe((res:any)=> {
      this.confirmMessage= res;
        });
    this.translate.get('APPALERT.TEXTTWO').subscribe((res:any)=> {
      this.confirmDeleteTextTwo= res;
        });
    let confirmDelete = this.alertCtrl.create({
      title: this.confirmDeleteTitle,
      message: this.confirmTwo,
      buttons: [
        {
          //when user does want to delete account
          text: this.confirmDeleteText,
          handler:() => {
            console.log("User has been deleted");
            this.menuCtrl.close();
            this.appUser.delete(window.localStorage.userId, window.localStorage.token)
            window.localStorage.clear();
            this.nav.setRoot(LandingPage);
            
            let toast = this.toastCtrl.create({
              message: this.confirmMessage,
              duration: 3000,
              position: 'top'
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            toast.present();
          }
        },
        {
          
          //when user does not want to delete account
          text: this.confirmDeleteTextTwo,
          handler: () => {
            console.log("User cancelled delete");
          }
        }
        ]
    });

    confirmDelete.present();
  };

  logout(){
     this.translate.get('LOGOUT.TITLE').subscribe((res:any)=> {
      this.logoutTitle= res;
        });
    this.translate.get('LOGOUT.MESSAGE').subscribe((res:any)=> {
      this.logoutMessage= res;
        });
    this.translate.get('LOGOUT.TEXT').subscribe((res:any)=> {
      this.logoutText= res;
        });
    this.translate.get('LOGOUT.TEXTTWO').subscribe((res:any)=> {
      this.logoutTextTwo= res;
        });
    let confirmLogout = this.alertCtrl.create({
      title: this.logoutTitle,
      message: this.logoutMessage,
      buttons: [
        {
          text: this.logoutText,
          handler:() => {
            console.log("User has logged out");
            this.menuCtrl.close();
            this.appUser.logout(window.localStorage.token);
            window.localStorage.clear();
            this.nav.setRoot(LandingPage);
          }
        },
        {
          text: this.logoutTextTwo,
          handler: () => {
            console.log("User cancelled logout");
          }
        }
        ]
    });
    confirmLogout.present();
  };
  
  history(){
    this.menuCtrl.close();
    this.nav.push(HistoryPage);
  };
  
  orgView(){
    this.menuCtrl.close();
  };
  
  adminView(){
    this.menuCtrl.close();
  };

}

