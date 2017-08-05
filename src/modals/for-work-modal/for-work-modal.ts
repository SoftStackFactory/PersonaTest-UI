import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ForWorkModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// let organizationList = [
//     {
//       orgName: "SoftStack",
//       orgID: 1
//     },{
//       orgName: "SalCo",
//       orgID: 2
//     }
//   ];


@Component({
  selector: 'for-work-modal',
  templateUrl: 'for-work-modal.html',
})
export class ForWorkModal {
  searchQuery: string = '';
  items: string[];

  initializeItems() {
    this.items = [
      "SoftStack Factory",
      "SalCo",
      "MindSpring",
      "Learn Academy"];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForWorkModalPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
