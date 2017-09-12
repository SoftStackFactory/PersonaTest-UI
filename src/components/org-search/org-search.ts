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
  orgLists: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
      this.initializeItems();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgSearchComponent');
  }
  
  initializeItems() {
    //this should actually get a list of organizations from the back end
    this.orgLists = [
      "SoftStack Factory",
      "SalCo",
      "MindSpring",
      "Learn Academy"
      ];
  }
  
  getItems(orgName: any){
    // Reset items back to all of the items
    this.initializeItems();

    console.log("hi hello" + orgName);
    
    // if the value is an empty string don't filter the items
    if (orgName && orgName.trim() != '') {
      this.orgLists= this.orgLists.filter((orgList) => {
        return (orgList.toString().toLowerCase().indexOf(orgName.toLowerCase()) > -1);
      })
    }
    
    //this.searchTerm = val;
    // console.log("hi hello" + this.searchTerm);
  }
  
  selectOrg(organization){
    this.orgSelectedChange.emit(organization);  
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
