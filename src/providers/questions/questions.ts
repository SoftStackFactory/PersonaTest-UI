import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config';


@Injectable()
export class QuestionsProvider {
  baseUrl: string = URL;
  path: string = "/Questions";

  constructor(public http: Http) {
    console.log('Hello QuestionsProvider Provider');
  }
  getQuestions(testId) {
    return this.http.get(this.baseUrl + this.path + `?filter[where][testId]=${ testId }`).map(res => res.json());
  }
  
  
}


// full questions for pedro test

// [
// {
//     "keyed": true,
//     "text": "Am the life of the party.",
//     "category": "Extraversion",
//     "testId": "59b74dc731996f18c21aad0f"
    
// },
// // {
// //     "keyed": true,
// //     "text": "Feel comfortable around people.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Start conversations.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Talk to a lot of different people at parties.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Don't mind being the center of attention.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Don't talk a lot.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Keep in the background.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Have little to say.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Don't like to draw attention to myself.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Am quiet around strangers.",
// //     "category": "Extraversion",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// {
//     "keyed": true,
//     "text": "Am interested in people.",
//     "category": "Agreeableness",
//     "testId": "59b74dc731996f18c21aad0f"
// },
// // {
// //     "keyed": true,
// //     "text": "Sympathize with others' feelings.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Have a soft heart.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Take time out for others.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Feel others' emotions.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Make people feel at ease.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Am not really interested in others.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Insult people.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Am not interested in other people's problems.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Feel little concern for others.",
// //     "category": "Agreeableness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// {
//     "keyed": true,
//     "text": "Am always prepared.",
//     "category": "Conscientiousness",
//     "testId": "59b74dc731996f18c21aad0f"
// },
// // {
// //     "keyed": true,
// //     "text": "Pay attention to details.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Get chores done right away.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Like order.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Follow a schedule.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Am exacting in my work.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Leave my belongings around.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Make a mess of things.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Often forget to put things back in their proper place.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Shirk my duties.",
// //     "category": "Conscientiousness",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// {
//     "keyed": true,
//     "text": "Am relaxed most of the time.",
//     "category": "Emotional Stability",
//     "testId": "59b74dc731996f18c21aad0f"
// },
// // {
// //     "keyed": true,
// //     "text": "Seldom feel blue.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Get stressed out easily.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Worry about things.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Am easily disturbed.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Get upset easily..",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Change my mood a lot.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Have frequent mood swings.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Get irritated easily.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Often feel blue.",
// //     "category": "Emotional Stability",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },

// {
//     "keyed": true,
//     "text": "Have a rich vocabulary.",
//     "category": "Intellect",
//     "testId": "59b74dc731996f18c21aad0f"
// }
// // },
// // {
// //     "keyed": true,
// //     "text": "Have a vivid imagination.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Have excellent ideas.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Am quick to understand things.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Use difficult words.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Spend time reflecting on things.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": true,
// //     "text": "Am full of ideas.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Have difficulty understanding abstract ideas.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Am not interested in abstract ideas.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // },
// // {
// //     "keyed": false,
// //     "text": "Do not have a good imagination.",
// //     "category": "Intellect",
// //     "testId": "59b74dc731996f18c21aad0f"
// // }
// ]



