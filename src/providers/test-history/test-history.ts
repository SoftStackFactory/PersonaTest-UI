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
  
  hasIncompleteTest: boolean;
  count: any;
  recentTestId: any;
  ID: any;
  constructor(public http: Http) {
    console.log('Hello TestHistoryProvider Provider');
    this.ID = window.localStorage.getItem("userId");
    this.userHasIncompleteTest();
    console.log(this.hasIncompleteTest);
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
  
  getUserTestTaken( userId: string , accessToken: string ){
    return this.http.get(
      this.baseUrl + this.path + '?filter[where][userId]=' + userId  
      + '&filter[order]=date%20DESC&filter' + 
      '&access_token=' + accessToken
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

  userHasIncompleteTest() {
    console.log('this should return true if they have a recent TestTaken with less than 50(total test questions) answers');
    let rValue = null;
    this.getMostRecentTestTakenIdByUserId(this.ID)
    let countOfTestsTaken;
    this.hasTestHistory(this.ID)
    .subscribe(
      res => {
        console.log("hasTestHistory response ", res);
        countOfTestsTaken = res.count;
      }, 
      error => {
        console.log("error ", error);
      },
      () => {
        if (countOfTestsTaken > 0){
        this.getMostRecentTestTakenIdByUserId(this.ID)
        .subscribe(
        testId => {
          if (testId != []){
            console.log("testId ", testId);
            console.log("testId[0].id ", testId[0].id);
            console.log("this.recentTestId ", this.recentTestId);
            this.recentTestId = testId[0].id;
            console.log("most recent test", this.recentTestId);
          } else {
            this.recentTestId = [{}];
          }
        }, error => {
          console.log(error);
        },
        () =>  {
          console.log("TH done with first callback", this.recentTestId);
          this.getAnswerCountByTestTakenId(this.recentTestId)
          .subscribe(
              res => {
                this.count = res.count;
                console.log("TH first subscribe count= ", this.count);
              }, error => {
                console.log(error);
              },
              () => {
                
                console.log("TH done with second callback", this.count);
                console.log("TH calculating whether or not they have another test ", this.count);
                rValue = (this.count < 50) ? true : false;
                this.hasIncompleteTest = rValue;
              }
            )
            console.log("TH last after");
      }
    )
        console.log("TH done with hasTestHistory callback");
      }})
      
    // return (this.count < 50) ? true : false;
    console.log("TH rValue ", rValue);
    return this.hasIncompleteTest;
  }

}
