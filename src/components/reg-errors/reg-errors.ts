import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegErrors component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'reg-errors',
  templateUrl: 'reg-errors.html'
})
export class RegErrorsComponent {
  
  alertTitle: string
  alertSubtitle: string
  
  constructor(
    private alertCtrl: AlertController
    ) {
    console.log('Hello RegErrors Component');
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
}
