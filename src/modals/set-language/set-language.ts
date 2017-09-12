import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AppUserProvider } from '../../providers/app-user/app-user';


@Component({
  selector: 'set-language-modal',
  templateUrl: 'set-language.html',
})
export class SetLanguageModal {
  
  alertTitle: string;
  alertSubtitle: string;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private translate: TranslateService,
      private alertCtrl: AlertController,
      private appUser: AppUserProvider
    ) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  setLanguage(lng){
    this.translate.use(lng);
  }
  
}