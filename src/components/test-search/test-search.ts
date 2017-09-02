import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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
  searchQuery: string = '';
  items:any;

  //mock data for existing tests
  initializeItems() {
    this.items = [
      {
        pic:"../../assets/blue-puzzle.jpg",
        title: "Goldberg",
        sub: "Big Five Personality Traits",
      },
      {
        pic:"../../assets/blue-puzzle2.jpg",
        title: "Cattell",
        sub: "16 Personality Factor Questionnaire",
      },
      {
        pic:"../../assets/blue-puzzle.jpg",
        title: "Levenson",
        sub: "Locus of Control",
      }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSearchComponent');
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
  

}
