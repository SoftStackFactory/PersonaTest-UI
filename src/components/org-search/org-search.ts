import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the OrgSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'org-search',
  templateUrl: 'org-search.html'
})
export class OrgSearchComponent {
  @Input() orgSelected: String;
  @Output() orgSelectedChange = new EventEmitter();
  
  searchQuery: string = '';
  items: string[];

  initializeItems() {
    //this should actually get a list of organizations from the back end
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
    console.log('ionViewDidLoad OrgSearchComponent');
  }
  
  selectOrg(organization){
    this.orgSelectedChange.emit(organization);  
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
