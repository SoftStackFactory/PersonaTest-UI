import { Component } from '@angular/core';

/**
 * Generated class for the Vincent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vincent',
  templateUrl: 'vincent.html'
})
export class Vincent {

  text: string;

  constructor() {
    console.log('Hello Vincent Component');
    this.text = 'Hello World';
  }

}
