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
  
  categoryExpandHeight: number = 100;
  categories: any = [];
  descriptions: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private questionsProvider: QuestionsProvider,
    ) {
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTestPage');
    
    this.questionsProvider.uniqueCategories().subscribe(
      categories => {
        this.categories = categories.sort().map(category => {
          return {expanded: false, name: category}
        });
        console.log("Unique Categories", this.categories);
      }, error => {
        console.log("Categories not found");
      })
      
    this.questionsProvider.uniqueDescriptions().subscribe(
      descriptions => {
        this.descriptions = descriptions.sort();
        console.log("Unique Descriptions", this.descriptions);
      }, error => {
        console.log("Descriptions not found");
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
