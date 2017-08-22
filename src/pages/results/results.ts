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
      this.gradeTest(this.answers);
        
      }
    )
  }
  
 
  
  gradeTest(test) {
    let results = test.reduce(function(total, value) {
      let category = value.category;
      if(category in total) {
        total[category] += value.selection
      } else {
        total[category] = value.selection
      } return total
    }, {})
    console.log("grades", results);
  }
 

}
