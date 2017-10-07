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

/*  
  presentToast() {
    this.translate.get('LANGUAGE.CONFIRM').subscribe((res:any)=> {
      this.toastMessage = res;
        });
    const toast = this.toastCtrl.create({
      message: this.toastMessage,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
 */ 
  
  
  setLanguage(lng){
    this.translate.use(lng);
    this.translate.get('LANGUAGE.CONFIRM').subscribe((res:any)=> {
      this.toastMessage = res;
        });
    let toast = this.toastCtrl.create({
      message: this.toastMessage,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.dismiss();
  }
  
}