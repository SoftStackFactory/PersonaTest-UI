import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnswersProvider {
  baseUrl: string = "http://sum-17-final-phortonssf.c9users.io/api";
  path: string = "/Answers";

  constructor(public http: Http) {
    console.log('Hello AnswersProvider Provider');
  }

  saveAnswer(answer) {
    return this.http.post(this.baseUrl + this.path, answer).map(res => res.json());
  }

}
