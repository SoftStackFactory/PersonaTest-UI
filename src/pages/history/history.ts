import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TestHistoryProvider } from '../../providers/test-history/test-history';


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
  emptyHistory: boolean = true;
  
  //Variable to store our array of test as an array of objects; Currently using mock data
  ourList: { name: string, date: Date }[] = {};
  
  //Variable to store copy of our original array, because we will need to filter
  filteredList: any = this.ourList;
  
  //User id
  myUserId: string = "";
  
  //access token 
  accessToken: string = ""
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private testTakensProv: TestHistoryProvider) {
                
    //Get userId and access token from local storage            
    this.myUserId = window.localStorage.getItem('userId');
    this.accessToken = window.localStorage.getItem('token');
    console.log("Our user id is " + this.myUserId + ", and access token is " + this.accessToken);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
    this.testTakensProv.getUserTestTaken(this.myUserId, this.accessToken).subscribe(
      res => {
        console.log(res);
        //Do not update page if there are no tests in test history
        if(!res || res.length == 0){
          return;
        }else{
          //Boolean empty history should be false so we can pass it to our search-list component 
          this.emptyHistory = false;
          this.ourList = res;
        }
        
      }, error => {
        alert("Could not pull questions");
        console.log(error);
      }
    )
    
    
  }

}
