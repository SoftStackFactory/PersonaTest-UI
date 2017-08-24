import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config'

@Injectable()
export class AnswersProvider {
  baseUrl: string = URL;
  path: string = "/Answers";

  constructor(public http: Http) {
    console.log('Hello AnswersProvider Provider');
  }

  saveAnswer(answer) {
    return this.http.post(this.baseUrl + this.path, answer).map(res => res.json());
  }
  
  getAnswers() {
    return this.http.get(this.baseUrl + this.path).map(res => res.json());
  }

}
