import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  
  //Variables to store user's search input and the date they select
  searchInput: string = "";

  
  //Boolean that for organization view (default to false - aka user view)
  orgView: boolean = false; 
  
  //Boolean that will display the empty results page (default to false)
  emptyHistory: boolean = false;
  
  //Variable to store our array of test as an array of objects; Currently using mock data
  ourList: { name: string, date: Date }[] = 
  [{name: "Goldberg's Big Five", date: new Date('August 22, 2017')}, 
  {name: "Goldberg's Big Five", date: new Date('August 20, 2016')}, 
  {name:"Markey and Markey's", date: new Date('Oct 4, 2016') },
  {name: "Costa and McCrae's NEO Facets", date: new Date('Jan 22, 2016')},
  {name:"Johnson's 120 Item NEO", date: new Date('April 4, 2010')}];
  
  //Variable to store copy of our original array, because we will need to filter
  filteredList: any = this.ourList;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
