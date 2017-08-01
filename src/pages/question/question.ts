import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionsProvider } from '../../providers/questions/questions';
import { ResultsPage } from '../results/results';
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  testName: string = "Goldberg's 1992 Big 5";
  userName: string = "John Smith";
  question: string;
  questionNum: number = 0;
  totalQuestionNum: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private questionsProvider: QuestionsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
    this.totalQuestionNum = this.questionsProvider.getQuestions().length;
  }
  ionViewWillEnter() {
    this.question = this.questionsProvider.getQuestion(this.questionNum).Text;
  }
  toNextQuestion() {
    if (this.questionNum === (this.totalQuestionNum - 1)){
      alert("we need to save results and display the results of a real test");
      this.navCtrl.push(ResultsPage);
    }
    this.questionNum++
    this.question = this.questionsProvider.getQuestion(this.questionNum).Text;
  }

}
