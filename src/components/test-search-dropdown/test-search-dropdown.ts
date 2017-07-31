import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TestSearchDropdownComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-search-dropdown',
  templateUrl: 'test-search-dropdown.html'
})
export class TestSearchDropdownComponent {

  //Our drop down list must be an array of objects
  dropDownList: { name: string, date: string }[];
  selectedTitle: string;
 
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.dropDownList = navParams.get('passedTests'); 
  }
 
  //When user clicks on something from the search dropdown, pass the data and close the popover 
  setSelectedTitle(selectedItem) {
    this.selectedTitle = selectedItem;
    this.viewCtrl.dismiss(this.selectedTitle);
  }

}
