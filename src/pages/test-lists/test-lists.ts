import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-test-lists',
  templateUrl: 'test-lists.html',
})
export class TestListsPage {
  
  ourListofTests = [{name: "Goldberg's 1992 Big Five", description: "The Big Five personality traits, also known as the five factor model (FFM), is a model based on common language descriptors of personality. The five factors have been defined as openness to experience, conscientiousness, extraversion, agreeableness, and neuroticism, often represented by the acronyms OCEAN. "},  
  {name: "Test2", description: "Some description here. Loren Ipsum."},
  {name: "Test3", description: "More description here. Loren Ipsum."}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestListsPage');
  }

}
