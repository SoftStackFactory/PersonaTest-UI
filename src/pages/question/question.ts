import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { QuestionsProvider } from '../../providers/questions/questions';
import { AnswersProvider } from '../../providers/answers/answers';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { ResultsPage } from '../results/results';
import { LobbyPage } from '../lobby/lobby';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild('slider') slider;
  testName: string = "";
  question: string;
  questionNum: number = 0;
  questionText: string;
  totalQuestionNum: number;
  // putting slider knob in the middle
  degreeNum: number = 49;
  answers = [];
  questions: any;
  testTaken: any;
  testId: string;
  user: Observable<any> = this.appUserProvider.getUser(window.localStorage.getItem("userId"), window.localStorage.getItem("token"));

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private questionsProvider: QuestionsProvider,
              private answersProvider: AnswersProvider,
              private alertCtrl: AlertController,
              private appUserProvider: AppUserProvider,
              private toastCtrl: ToastController
              ) {}

  ionViewDidLoad() {
    this.testTaken = this.navParams.get("testTaken");
    this.testName = this.testTaken["name"];
    this.testId = this.testTaken["testId"];
    this.questionsProvider.getQuestions(this.testId).subscribe(
      questions => {
        if(questions){
        this.questions = questions;
        this.totalQuestionNum = questions.length
        this.shuffleArray(questions)
        this.assignQuestion();
        console.log("questions inside IonViewDidLoad getQuestions subscription", this.questions);
        }
        
      }, error => {
        this.showAlert("There was a problem retrieving " + this.testName + ". Please try again later.");
        console.log(error);
      }
    )
    console.log("fromionviewDidLoad question.ts page - this.testTaken ");
    console.log("this.testTaken: ");
    console.log(this.testTaken);
    console.log("this.testName: ");
    console.log(this.testName);
    console.log("this.testId: ");
    console.log(this.testId);
    console.log("this.questions: ");
    console.log(this.questions);
  }

  toNextQuestion() {
    console.log("Question - this.testTaken is: ", this.testTaken);
    let answer = {
      questionId: this.question["id"],
      testTakenId: this.testTaken["id"],
      selection: this.convertScale(this.degreeNum),
      date: new Date(),
      keyed: this.question["keyed"],
      category: this.question["category"]
    }
    if (answer.selection === undefined) {
      // display error message
      let toast = this.toastCtrl.create({
        message: 'Please select an answer in the slider',
        duration: 1500,
        position: 'bottom'
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    } else {
      // save answer in an array
      this.answers.push(answer)
      // save answer in backend
      this.saveAnswerToBackend(answer);
      console.log(this.answers)
      if (this.questionNum === this.totalQuestionNum - 1) { // if it's the last question
        this.navCtrl.setRoot(ResultsPage, {testTaken: this.testTaken, answers: this.answers});
        console.log("lastQ", this.testTaken);
      } else {
        this.questionNum++;
        this.assignQuestion();
      }
      this.slider.reset();
      // Putting slider knob in the middle
      this.degreeNum = 49;
    }
  }
  
  showAlert(errorMessage: string) {
    let alert = this.alertCtrl.create({
      subTitle: errorMessage,
      // if there is an error, user is moved back to the previous page
      buttons: [{ text: "Dismiss", handler: () =>  this.toPreviousPage() }]
    });
    alert.present();
  }
  toPreviousPage() {
    this.navCtrl.pop();
  }
  toLobbyPage() {		 
     console.log('to lobby page');		
     this.navCtrl.setRoot(LobbyPage);		
  }
  
  saveAnswers() {
    let alert = this.alertCtrl.create({
      title: 'Save Answers',
      message: 'Do you want to save answers and leave?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('cancel clicked')
        },
        {
          text: 'Save',
          handler: () => {
            let answer = {
              questionId: this.question["id"],
              testTakenId: this.testTaken["id"],
              selection: this.convertScale(this.degreeNum),
              date: new Date(),
              keyed: this.question["keyed"],
              category: this.question["category"]
            }
            if (answer.selection != undefined) { // if answer is selected
              // save the answer in backend and leave
              this.saveAnswerToBackend(answer);
              this.toLobbyPage();
            } else {
              this.toLobbyPage();
            }
          }
        }
      ]
    });
    alert.present();
  }
  // convert ion-range value to 1-5
  private convertScale(num: number) {
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
  private saveAnswerToBackend(answer) {
    this.answersProvider.saveAnswer(answer).subscribe(
      answer => {
        console.log("answer saved", answer);
      }, error => {
        this.showAlert("There was a problem saving your answers. Please try again later.");
      }
    )
  }
  
  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
