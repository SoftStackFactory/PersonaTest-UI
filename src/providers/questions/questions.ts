import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { QUESTIONS } from './mock-questions';

@Injectable()
export class QuestionsProvider {

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  getQuestions() {
    return QUESTIONS;
  }
  getQuestion(index: number) {
    return QUESTIONS[index];
  }
}
