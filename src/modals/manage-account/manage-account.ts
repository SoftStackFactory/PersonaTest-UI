import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import { AppUserProvider } from '../../providers/app-user/app-user';

@Component({
  selector: 'manage-account-modal',
  templateUrl: 'manage-account.html',
})
export class ManageAccountModal {
  private accountChangeForm : FormGroup;

  alertTitle: string
  alertSubtitle: string
  
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController,
      private formBuilder: FormBuilder,
      private translate: TranslateService,
      private alertCtrl: AlertController,
      private appUser: AppUserProvider
     ) {
        this.accountChangeForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            age: [''],
            gender: ['', Validators.required]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeAnOrganizationModal');
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
  
  accountChange(form) {
    console.log("New Account Data", this.accountChangeForm.value)
    if(form.invalid) {
      this.alertTitle = "Invalid Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();
    }
    
    //successfull registration
    this.appUser.changeData(window.localStorage.getItem('userId'), 
        window.localStorage.getItem('token'), 
        this.accountChangeForm.value)
      .map(res => res.json())
      .subscribe(res => {
        this.viewCtrl.dismiss();
        
      }, error => {
        //Server side errors
        if (error.status === 404) {
          this.alertTitle = "404";
          this.alertSubtitle = "Not Found.";
          return this.showAlert();

        } else if (error.status === 500) {
          this.alertTitle = "500";
          this.alertSubtitle = "Server is currently offline, please try again in a few minutes.";
          return this.showAlert();
        }    
      });
    }
  
  setLanguage(lng){
    this.translate.use(lng);
  }



}
