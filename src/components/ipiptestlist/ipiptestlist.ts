import { Component, Input } from '@angular/core';
import { QuestionPage } from '../../pages/question/question'; 
import { NavController, NavParams } from 'ionic-angular';

// import { Platform } from 'ionic-angular';


/**
 * Generated class for the IpiptestlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ipiptestlist',
  templateUrl: 'ipiptestlist.html'
//     template: `
//     <ion-header>
//       <ion-navbar>
//         <ion-title>Tabs</ion-title>
//       </ion-navbar>
//     </ion-header>
//     <ion-content>
//     </ion-content>
// `
})
  
export class IpiptestlistComponent {

  text: string;
  // isAndroid: boolean = false;
  
  //Variable to store the lists of tests available; will be passed in through calling page's html
  @Input() ourListofTests: {name: string, description: string, date: Date}[]; 
    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    ) {
      console.log('Hello IpiptestlistComponent Component');
      this.text = 'Hello';
      
  // constructor(platform: Platform) {
  //   console.log('Hello IpiptestlistComponent Component');
  //   this.text = 'Hello';
  //   this.isAndroid = platform.is('android');
  
  }
    toQuestionPage() {
    console.log('to question page');
    this.navCtrl.push(QuestionPage);
  }

}

// @Component({
//   template: `
//     <ion-tabs class="tabs-basic">
//       <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
//       <ion-tab tabTitle="Movies" [root]="rootPage"></ion-tab>
//       <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
//     </ion-tabs>
// `})

// export class BasicPage {
//   rootPage = IpiptestlistComponent;
// }
