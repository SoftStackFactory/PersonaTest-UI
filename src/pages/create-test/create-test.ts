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
  
  // items: any = [];
  categoryExpandHeight: number = 100;
  categories: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questionsProvider: QuestionsProvider,
    ) {
      // this.items = [
      // this.categories = [
      //   {expanded: false, name: "test"},
      //   {expanded: false, name: "test2"},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false},
      //   {expanded: false}
      // ];
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
    
    this.questionsProvider.uniqueCategories().subscribe(
      categories => {
        this.categories = categories.map(category => {
          return {expanded: false, name: category}
        });
        console.log("Unique Categories", this.categories);
      }, error => {
        console.log("Categories not found");
      })
  }
  
  expandCategory(category){
    this.categories.map((listCategory) => {
      if(category == listCategory){
        listCategory.expanded = !listCategory.expanded;
      } else {
        listCategory.expanded = false;
      }
      return listCategory;
    });

  }

}
