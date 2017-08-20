import { Component, ViewChild } from '@angular/core';
import { ToastController, Platform, Nav, ModalController, MenuController, AlertController } from 'ionic-angular';
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
import { PasswordResetModal } from '../modals/password-reset/password-reset';
import { BeAnOrganizationModal } from '../modals/be-an-organization/be-an-organization';
import { AppUser } from '../providers/app-user';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = LandingPage;
  @ViewChild(Nav) nav: Nav;
  
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private appUser: AppUser) {
    platform.ready().then(() => {
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
  
  resetPassword(){
    console.log("password reset requested");
    let passwordResetModal = this.modalCtrl.create(PasswordResetModal);
    passwordResetModal.present();
  };
  
  becomeOrg(){
    console.log("go to Organization request page");
    let becomeOrgModal = this.modalCtrl.create(BeAnOrganizationModal);
    becomeOrgModal.present();
  };
  
  deleteAcc(){
    
    //prompt user to confirm request to delete account
    let confirmDelete = this.alertCtrl.create({
      title: 'Confirm Account Delete',
      message: 'Are you sure you would like to delete your account? Any test data will be lost.',
      buttons: [
        {
          //when user does want to delete account
          text: 'Yes, delete my account',
          handler:() => {
            console.log("User has been deleted");
            this.menuCtrl.close();
            this.appUser.delete(window.localStorage.id, window.localStorage.token)
            window.localStorage.clear();
            this.nav.setRoot(LandingPage);
            
            let toast = this.toastCtrl.create({
              message: 'Your account has been deleted.  Please visit us again for future testing needs.',
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
          text: 'No, keep my account active',
          handler: () => {
            console.log("User cancelled delete");
          }
        }
        ]
    });
    confirmDelete.present();
  };
  
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

/*
<button ion-button menuClose icon-only outline (click)="closeMenu()">
              <ion-icon name="close-circle"></ion-icon>
            </button>
*/