import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config'

@Injectable()
export class QuestionsProvider {
  baseUrl: string = URL;
  //= "http://sum-17-final-phortonssf.c9users.io/api";
  path: string = "/Questions";

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  getQuestions() {
    return this.http.get(this.baseUrl + this.path).map(res => res.json());
  }
}
