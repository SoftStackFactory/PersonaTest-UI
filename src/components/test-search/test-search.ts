import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

//Pages
import { QuestionPage } from '../../pages/question/question';

//Providers
import { ResultsProvider } from '../../providers/results/results';

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
  testSelected: string;
  TEST: any;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private alertCtrl: AlertController, public resultsProvider:ResultsProvider) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestSearchComponent');
  }
  
  testAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ready?',
      subTitle: 'This test will take approximately 20 min.',
      buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('Ok clicked');
          this.forPlay();
        }
      }
    ]
    });
    alert.present();
  }

  forPlay() {
    let testTaken = {
      // Hard coded ID, generated from the App user model in the backend
      userId: "59a32e40a35bbc79d8931602",
      // Hard coded ID, generated from the test model in the backend
      // Eventually will reference each test's unique id
      testId: "59a323f32eb4c1781fd6c1e3",
      date: new Date(),
      Extraversion: 0,
      Agreeableness: 0,
      Conscientiousness: 0,
      'Emotional Stability': 0,
      Intellect: 0,
      name: 'Goldberg'
    };
    this.resultsProvider.initializeTest(testTaken)
      .subscribe(
        test => {
          this.TEST = test
          console.log("Initalized Test", this.TEST);
          
        }, error => {
          console.log(error);
        },
       () =>  this.navCtrl.push(QuestionPage, {testTaken: this.TEST} )
        
      )
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

  //when a test is selected
  // selectedItem(mouseClick, item){
  //   return this.testSelected = item.title;
  //   console.log('Test Selected');
  // }
  
}
