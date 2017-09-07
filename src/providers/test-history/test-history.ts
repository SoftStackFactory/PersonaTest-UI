import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config'

/*
  Generated class for the TestHistoryProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TestHistoryProvider {
  
  //baseUrl depends on whose terminal is hosting the backend; update accordingly
  baseUrl: string = URL;
  
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
  
  getAllTestTaken() {
    return this.http.get(
      this.baseUrl + this.path 
    ).map(res => res.json());
  }
  
  getUserTestTaken( userId: string ){
    return this.http.get(
      this.baseUrl + this.path + '?filter[where][userId]=' + userId  
    ).map( res=> res.json()); 
  }

  getMostRecentTestTakenIdByUserId(userId) {
    return this.http.get(
      this.baseUrl + this.path + 
      `?filter={"where":{"userId": "${ userId }"}, "order":"date DESC","limit":1,"fields":"id"}`
      // `&filter={"order":"date DESC"}` +
      // `&filter={"limit":1}` +
      // `&filter={"fields":{"id":true}}`
    ).map(res => res.json());
  }
  
  getAnswerCountByTestTakenId(testTakenId) {
    return this.http.get(
      this.baseUrl + this.path + "/" +
      testTakenId + `/Answer/count` 
    ).map(res => res.json());
  }
  
  hasTestHistory(userId) {
    return this.http.get(
      this.baseUrl + `/AppUsers/` +
      userId + `/testTakens/count`
      ).map(res => res.json());
  }

}
