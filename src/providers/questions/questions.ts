import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsProvider {
  baseUrl: string = "http://localhost:3000/api";
  path: string = "/Questions";

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  getQuestions() {
    return this.http.get(this.baseUrl + this.path).map(res => res.json());
  }
}
