import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

// Providers
import { TestsProvider } from '../../providers/tests/tests';

/**
 * Generated class for the OrgSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-search',
  templateUrl: 'test-search.html'
})
export class TestSearchComponent {
  @Input() testSelected: String;
  @Output() testSelectedChange = new EventEmitter();
  
  searchQuery: string = '';
  items: string[];
  nameArray: any = [];
  idArray: any = [];
  
  
  initializeItems() {
    
    this.testsProvider.getTests()
      .subscribe(
        test => {
          this.nameArray = [];
          test.forEach((t)=> this.nameArray.push(t.name))
          console.log("Test Names", this.nameArray);
          
          this.idArray = [];
          test.forEach((t)=> this.idArray.push(t.id))
          console.log("Test Ids", this.idArray)
      
        }, error => {
          console.log(error)
        }
      )
      
      this.items = this.nameArray;
      console.log("items", this.items);
    // //this should actually get a list of organizations from the back end
    // this.items = [
    //   "Goldberg's Big 5 Factors",
    //   "test",
    //   "test",
    //   "test"];
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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public testsProvider: TestsProvider,
    ) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgSearchComponent');
  }
  
  selectedTest(test) {
    this.testSelectedChange.emit(test);
    console.log("CLICK ME!!!!")
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
