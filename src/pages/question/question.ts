import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionsProvider } from '../../providers/questions/questions';
import { ResultsPage } from '../results/results';
import { LobbyPage } from '../lobby/lobby';

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
  // setting slider value to Neutral
  degreeNum: number = 50;
  answers = [];

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

    if (this.questionNum === this.totalQuestionNum - 1) { // if it's the last question
      this.navCtrl.setRoot(ResultsPage);
    } else {
      this.questionNum++;
      this.question = this.questionsProvider.getQuestion(this.questionNum).Text;
    }
    this.answers.push(this.convertScale(this.degreeNum))
    // resetting slider value to Neutral
    this.degreeNum = 50;
  }
  toLobbyPage() {
    console.log('to lobby page');
    this.navCtrl.setRoot(LobbyPage);
  }
  // convert ion-range value to 1-5
  convertScale(num: number) {
    switch(num) {
      case 0:
      return 1;
      case 25:
      return 2;
      case 50:
      return 3;
      case 75:
      return 4;
      case 100:
      return 5;
    }
  }

}
