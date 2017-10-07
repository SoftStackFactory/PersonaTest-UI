import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AppUserProvider } from '../../providers/app-user/app-user';


@Component({
  selector: 'set-language-modal',
  templateUrl: 'set-language.html',
})
export class SetLanguageModal {
  
  toastMessage: string;
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private translate: TranslateService,
      private toastCtrl: ToastController,
      private appUser: AppUserProvider
    ) {
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetModal');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Language selection changed to English',
      duration: 3000,
      position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
  
  
  
  setLanguage(lng){
    this.translate.use(lng);
    this.dismiss();
    return this.presentToast();
  }
  
}