import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AppUserProvider } from '../../providers/app-user/app-user';


@Component({
  selector: 'set-language-modal',
  templateUrl: 'set-language.html',
})
export class SetLanguageModal {
  
  langTitle: string;
  langMessage: string;
  langText: string;
  langTextTwo: string;
  language: string;
  
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
  
  setLanguage(lng){
    if (lng == 'sp'){
      this.language = "Spanish."
    };
    if (lng == 'en'){
      this.language = "Inglés."
    }
    //this.translate.use(lng);
    this.translate.get('LANGUAGE.CONFIRM').subscribe((res:any)=> {
      this.langTitle = res;
        });
    this.translate.get('LANGUAGE.MESSAGE').subscribe((res:any)=> {
      this.langMessage = res;
        });
    this.translate.get('LANGUAGE.TEXT').subscribe((res:any)=> {
      this.langText = res;
        });
    this.translate.get('LANGUAGE.TEXTTWO').subscribe((res:any)=> {
      this.langTextTwo = res;
        });
    console.log("language confirmation requested");
    
    let confirmLanguage = this.alertCtrl.create({
      title: this.langTitle,
      message: this.langMessage,
      buttons: [
        {
          text: this.langText + this.language,
          handler:() => {
            this.translate.use(lng);
            console.log("language change confirmed " + this.language + lng );
            this.dismiss();
          }
        },
        {
          text: this.langTextTwo,
          handler: () => {
            console.log("language not changed");
          }
        }
        ]
    });
    confirmLanguage.present();
  };
    
  
}