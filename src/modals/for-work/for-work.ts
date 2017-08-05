import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'for-work-modal',
  templateUrl: 'for-work.html'
})
export class ForWorkModal {
  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}