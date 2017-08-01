import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js';

/**
 * Generated class for the SearchHistoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-history',
  templateUrl: 'search-history.html'
})
export class SearchHistoryComponent {

  //Variables for the tests arrays; The calling page will input them in its .html file
  @Input() testList: {  name: string, date: string }[];
  @Input() filteredTestList: { name: string, date: string }[];  
  
  //Variable for user's input in search bar 
  searchInput: string = "";
  
  //Variable for user's input in date picker
  searchDate: string = "";
  
  //Boolean for displaying the search results dropdown
  displayDropdown: boolean = false;
  
  
  constructor() {
    console.log('Hello SearchHistoryComponent Component');
  }
  
  //doSearch gets called when user changes any key input in search bar
  doSearch(searchBar){
    
    //get the entire array of tests
    this.filteredTestList = this.testList;
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
  
  //onCancel gets called when user clicks outside of search bar
  onCancel(mouseClick){
    //hide the dropdown search results
    this.displayDropdown = false;
    
  }
  
  //selectedTest gets called when user clicks something from our search list
  selectedTest(mouseClick, test){
     console.log( test.name);
  }

  
  

}
