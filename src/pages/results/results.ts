import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChartComponent } from '../../components/chart/chart';
import { TestlistComponent } from '../../components/testlist/testlist';


/**
 * Generated class for the ResultsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    alert("there should be another results page? conflict here");
  }
  


}
