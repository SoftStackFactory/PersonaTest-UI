import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TestHistoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TestHistoryProvider {
  
  //baseUrl depends on whose terminal is hosting the backend; update accordingly
  baseUrl: string = "https://sp-17-jenny-jbrownssf.c9users.io:8080/api";
  
  //path is following the API url path from Pt-Backend; update accordingly if spelling changes
  path: string = "/TestTakens";

  constructor(public http: Http) {
    console.log('Hello TestHistoryProvider Provider');
  }
  
  addNewTest( newTestData ) {
    return this.http.post(
      this.baseUrl + this.path,
      newTestData
    );
  }
  
  getAllTestsTaken( token ) {
    return this.http.get(
      this.baseUrl + this.path + "/" + token
    );
  }

}
