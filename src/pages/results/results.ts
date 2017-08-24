import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Providers
import { ResultsProvider } from '../../providers/results/results';

// Components
import { ChartComponent } from '../../components/chart/chart';
import { TestlistComponent } from '../../components/testlist/testlist';
import { LogoutComponent } from '../../components/logout/logout';


@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  
  private answers: any = {}; 
  public gradedTest: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private resultsProvider: ResultsProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    this.resultsProvider.getAnswers().subscribe(
      answers => {
        this.answers = answers;
        console.log("answers are here", answers);
      }, error => {
        alert("Answers not successfully provided!");
        console.log(error);
      },() =>{ 
      this.gradedTest = this.testGrade(this.answers);
      console.log("results", this.gradedTest)
      }
    )
  }
  
  
  testGrade(answer) {
    let results = answer.reduce(function(total, value) {
      let category = value.category;
      if(value.keyed == false) {
        let sumSelection = function(number) {
               return ((3 - number) + 3)
             }
        if(category in total) {
            total[category] += sumSelection(value.selection)
          } else {
            total[category] = sumSelection(value.selection)
          } return total
        }
      else {
        if(category in total) {
            total[category] += value.selection
          } else {
            total[category] = value.selection
          } return total
        } 
       }, {})
       return results;
  }


}
