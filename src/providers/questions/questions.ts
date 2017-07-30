import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { QUESTIONS } from './mock-questions';

/*
  Generated class for the QuestionsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuestionsProvider {

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }

  getQuestion(index: number) {
    console.log(QUESTIONS[index])
    return QUESTIONS[index];
  }
}
