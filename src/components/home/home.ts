import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { LobbyPage } from '../../pages/lobby/lobby';

/**
 * Generated class for the Home component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {

  constructor(
    private navCtrl: NavController
    ) {
    console.log('Hello Home Component');
  }
  
  goHome(){
    this.navCtrl.setRoot(LobbyPage);
  }

}
