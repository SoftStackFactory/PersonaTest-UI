import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionsProvider } from '../../providers/questions/questions';

/**
 * Generated class for the CreateTestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-test',
  templateUrl: 'create-test.html',
})
export class CreateTestPage {
  
  items: any = [];
  itemExpandHeight: number = 100;
  categories: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questionsProvider: QuestionsProvider,
    ) {
      this.items = [
        {expanded: false}
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false},
        // {expanded: false}
      ];
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
    
    this.questionsProvider.uniqueCategories().subscribe(
      categories => {
        this.categories = categories;
        console.log("Unique Categories", this.categories);
      }, error => {
        console.log("categories not found");
      })
  }
  
  expandItem(item){
    this.items.map((listItem) => {
      if(item == listItem){
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });

  }

}
