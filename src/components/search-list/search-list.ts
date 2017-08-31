import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';  //To filter our dates
import { NavController} from 'ionic-angular';   //To navigate to individual test results page
import { ResultsPage } from '../../pages/results/results';
import { TestListsPage } from '../../pages/test-lists/test-lists';

/**
 * Generated class for the SearchListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-list',
  templateUrl: 'search-list.html'
})
export class SearchListComponent {

  //Variables for the tests arrays; The calling page will input them in its .html file
  @Input() ourList: {  name: string, date: Date }[];
  @Input() filteredList: { name: string, date: Date }[];  
  
  //Boolean - displays graphs if history is not empty; otherwise prompt user
  @Input() emptyHistory: boolean = true;

  //Variable for user's input in search bar 
  searchInput: string = "";
  
  //Boolean to display if is an org
  orgView: boolean = false;
  
  //Boolean for displaying the search results dropdown
  displayDropdown: boolean = false;
  
  //Function to return an array of strings that ngFor in html file will call
  //and display our options when user tries to select
  searchTimes(): string[] {
    return [
      "Past Six Months",
      "Past Year",
      "Past Two Years",
      "All Time"
    ];
  }

  //Variable for user's input in date selector; this is the default value
  searchTime: string = "All Time";
  
  
  constructor( public navCtrl: NavController ) {
    console.log('Hello SearchListComponent Component');
  }
  
  //doSearch gets called when user changes any key input in search bar
  doSearch(searchBar){
    
    //get the entire array of tests
    this.filteredList = this.ourList;
    // set q to the value of the searchbar
    var q = searchBar.srcElement.value;

    //if the value is an empty string don't filter the items
    if (!q) {
      this.displayDropdown = false;
      return;
    }
    
    //display the dropdown menu
    this.displayDropdown = true;
    
    //filter out the relevant search results
    this.filteredList = this.filteredList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
 
        return false;
      }
    });

    console.log("The number of search results is " + this.filteredList.length);
    console.log("Our search input is " + this.searchInput );
    
  }
  
  //onCancel gets called when user clicks outside of search bar
  onCancel(mouseClick){
    //hide the dropdown search results
    this.displayDropdown = false;
    
  }
  
  //selectedItem gets called when user clicks something from our search list
  selectedItem(mouseClick, item){
    console.log("The item you selected is " + item.name);
    this.navCtrl.push(ResultsPage, {testTaken: item});
  }
  
  //Go to the TestsLists Page if user clicks on the option
  goToTestsPage(){
    this.navCtrl.push(TestListsPage);
  }
  

}
