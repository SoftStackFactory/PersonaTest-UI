import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Providers
import { AnswersProvider } from '../../providers/answers/answers';

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
    private answersProvider: AnswersProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    // Retrieve user's test answers from the backend
    this.answersProvider.getAnswers().subscribe(
      answers => {
        this.answers = answers;
        console.log("answers are here", answers);
      }, error => {
        alert("Answers not successfully provided!");
        console.log(error);
      },() =>{ 
      // Sort answer's selection by category
      this.gradedTest = this.testGrade(this.answers);
      console.log("results", this.gradedTest)
      }
    )
  }
  
  
  testGrade(answer) {
    // Pass each answer into a reduce method
    let results = answer.reduce(function(total, value) {
      let category = value.category;
      // invert the value of a selection if keyed negatively 
      // If the question is keyed false, then a selection of strongly agree would equate to a value of 1 towards the appropiate category
      if(value.keyed == false) {
        let sumSelection = function(number) {
               return ((3 - number) + 3)
             }
        if(category in total) {
            // Add each answer's selection value to an existing category
            total[category] += sumSelection(value.selection)
          } else {
            // Assign the answer's selection value if the category has not been accounted for yet
            total[category] = sumSelection(value.selection)
          } return total
        }
      else {
        // The selection values of each question are summed like above, except that the selection values aren't inverted
        // Ex. "I am the life of the party" and the question is keyed true, then a selection of strongly agree would equate to a value of 5 towards the appropiate category
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
