import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ManageAccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let thisOrg = {
  orgName: "SoftStack Factory",
  orgUrl: "https://softstackfactory.com",
  orgImg: "https://static1.squarespace.com/static/56b8dfcf62cd94ec072ddb33/t/56b8fb407c65e41187eef606/1501719744532/?format=1500w",
  tests: [{
    name: "Goldberg's Big 5",
    testId: 191495818
  }]
}

@Component({
  selector: 'page-manage-account',
  templateUrl: 'manage-account.html',
})
export class ManageAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageAccountPage');
  }

}
