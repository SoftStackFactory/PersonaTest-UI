import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

//Pages
import { QuestionPage } from '../../pages/question/question';

//Providers
import { ResultsProvider } from '../../providers/results/results';
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
  TEST: any;
  searchQuery: string = '';
  testLists: any;
  items: string[];
  nameArray: any = [];
  idArray: any = [];
  testArrays: any = [];
  testName: any;
  
  
  initializeItems() {
    
    this.testsProvider.getTests()
      .subscribe(
        test => {
          // this.nameArray = [];
          // test.forEach((t)=> this.nameArray.push(t.name))
          // console.log("Test Names", this.nameArray);
          
          // this.idArray = [];
          // test.forEach((t)=> this.idArray.push(t.id))
          // console.log("Test Ids", this.idArray)
          
          this.testArrays = [];
          test.forEach((t)=> this.testArrays.push(t))
          console.log("Test Object", this.testArrays)
      
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

  // initializeItems() {
  //   this.testLists = [
  //     {
  //       pic:"../../assets/blue-puzzle.jpg",
  //       title: "Goldberg",
  //       sub: "Big Five Personality Traits",
  //     },
  //     {
  //       pic:"../../assets/blue-puzzle2.jpg",
  //       title: "Cattell",
  //       sub: "16 Personality Factor Questionnaire",
  //     },
  //     {
  //       pic:"../../assets/blue-puzzle.jpg",
  //       title: "Levenson",
  //       sub: "Locus of Control",
  //     }
  //   ]
  // }
  
  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.testLists = this.testLists.filter((testList) => {
        return (testList.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public resultsProvider: ResultsProvider,
    public testsProvider: TestsProvider,
    ) {
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrgSearchComponent');
  }
  
  selectedTest(test) {
   this.testSelectedChange.emit(test);
      
      // this.items = this.nameArray;
      // console.log("items", this.items);
  }


  
  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  testAlert(test) {
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
          this.forPlay(test);
        }
      }
    ]
    });
    alert.present();
  }

  forPlay(test) {
    let testTaken = {
      // Hard coded ID, generated from the App user model in the backend
      userId: localStorage.getItem('userId'),
      // Hard coded ID, generated from the test model in the backend
      // Eventually will reference each test's unique id
      testId: test.id,
      date: new Date(),
      Extraversion: 0,
      Agreeableness: 0,
      Conscientiousness: 0,
      'Emotional Stability': 0,
      Intellect: 0,
      name: test.name
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


}
