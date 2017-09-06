import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionsProvider } from '../../providers/questions/questions';
import { AnswersProvider } from '../../providers/answers/answers';
import { ResultsPage } from '../results/results';
import { LobbyPage } from '../lobby/lobby';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild('slider') slider;
  testName: string = "Goldberg's 1992 Big 5";
  userName: string = "John Smith";
  question: string;
  questionNum: number = 0;
  questionText: string;
  totalQuestionNum: number;
  // setting slider value to Neutral
  degreeNum: number = 49;
  answers = [];
  private questions: any;
  testTaken: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private questionsProvider: QuestionsProvider,
              private answersProvider: AnswersProvider
              ) {
  }

  ionViewDidLoad() {
    this.testTaken = this.navParams.get("testTaken");
    console.log('ionViewDidLoad QuestionPage', this.testTaken);
    this.questionsProvider.getQuestions().subscribe(
      questions => {
        this.questions = questions;
        this.totalQuestionNum = questions.length
        this.assignQuestion();
        console.log("questions", this.questions);
      }, error => {
        alert("Something went wrong. For assistance, please contact SSF");
        console.log(error);
      }
    )
  }

  toNextQuestion() {
    console.log("Question - this.testTaken is: ", this.testTaken);
    let answer = {
      questionId: this.question["id"],
      testTakenId: this.testTaken["id"],
      // testTakenId: "testTaken",
      selection: this.convertScale(this.degreeNum),
      date: new Date(),
      keyed: this.question["keyed"],
      category: this.question["category"]
    }
    // save answer in an array
    this.answers.push(answer)
    // save answer in backend
    this.answersProvider.saveAnswer(answer).subscribe(
      answer => {
        console.log(answer);
      }, error => {
        console.log(error);
      }
    )
    console.log(this.answers)
    if (this.questionNum === this.totalQuestionNum - 1) { // if it's the last question

      this.navCtrl.setRoot(ResultsPage, {testTaken: this.testTaken, answers: this.answers});
      console.log("lastQ", this.testTaken);
    } else {
      this.questionNum++;
      this.assignQuestion();
    }
    // resetting slider value to Neutral
    this.slider.reset();
    this.degreeNum = 49;
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
  private assignQuestion() {
    this.question = this.questions[this.questionNum];
    this.questionText = this.questions[this.questionNum]["text"];
  }

}
