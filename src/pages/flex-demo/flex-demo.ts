import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MarenComponent } from '../../components/maren/maren'

/**
 * Generated class for the FlexDemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-flex-demo',
  templateUrl: 'flex-demo.html',
})
export class FlexDemoPage {
  myName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlexDemoPage');
    this.myName = "Maren";
  }

}
