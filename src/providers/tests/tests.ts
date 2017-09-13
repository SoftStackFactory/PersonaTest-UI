import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config';


/*
  Generated class for the TestsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and AngTestsular DI.
*/
@Injectable()
export class TestsProvider {
  
      //Strongloop API Explorer's request URL
  baseUrl: string = URL;
  path: string = "/tests";

  constructor(public http: Http) {
    console.log('Hello TestsProvider Provider');
  }
  
  getTests() {
    return this.http.get(
      this.baseUrl + this.path
      ).map(res => res.json());
  }
}
