import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ChartComponent } from '../../components/chart/chart';
import { TestlistComponent } from '../../components/testlist/testlist';


/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class HistoryPage {
  //Variables to store user's search input and the date they select
  searchInput: string = "";
  searchDate: string = "";
  
  //Variable to store our array of test as an array of objects
  testList: { name: string, date: string }[] = 
  [{name: "Goldberg's Big Five", date: "17-3-2017"}, 
  {name: "Goldberg's Big Five", date: "23-11-2017"}, 
  {name:"Markey and Markey's", date: "2-12-2016"}];
  
  //Variable to store copy of our original array, because we will need to filter
  filteredTestList: any = this.testList;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }
  
  
  //doSearch gets called when user changes any inpur in search bar
  doSearch(searchBar){
    
    this.filteredTestList = this.testList;
    // set q to the value of the searchbar
    var q = searchBar.srcElement.value;

    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    
    this.filteredTestList = this.filteredTestList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

  console.log(q, this.filteredTestList.length);
  console.log(this.searchInput + " " + q);
  console.log(this.searchDate);
}
  
  //selectedTest gets called when user clicks something from our search list
  selectedTest(moouseCLick, test){
     console.log( test.name);
  }


}
