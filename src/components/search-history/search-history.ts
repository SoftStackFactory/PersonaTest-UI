import { Component, Input } from '@angular/core';

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

  @Input() testList: {  name: string, date: string }[];
  @Input() filteredTestList: { name: string, date: string }[];  
  text: string = "";
  searchInput: string = "";
  searchDate: string = "";
  
  constructor() {
    console.log('Hello SearchHistoryComponent Component');
    this.text = 'Hello World';
  }
  
  //doSearch gets called when user changes any inpuy in search bar
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
