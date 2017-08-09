import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the Eula component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'eula',
  templateUrl: 'eula.html'
})
export class EulaComponent {

  text: string;

  constructor(
    private viewCtrl: ViewController
    ) {
    console.log('Hello Eula Component');
    this.text = 'Hello World';
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
  
}
