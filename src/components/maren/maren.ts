import { Component, Input } from '@angular/core';

/**
 * Generated class for the MarenComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'maren',
  templateUrl: 'maren.html'
})
export class MarenComponent {
  @Input() myName: string;

  constructor() {
    console.log('Hello Maren Component');
  }

}
