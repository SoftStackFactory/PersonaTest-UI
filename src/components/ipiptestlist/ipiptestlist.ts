import { Component } from '@angular/core';

/**
 * Generated class for the IpiptestlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ipiptestlist',
  templateUrl: 'ipiptestlist.html'
})
export class IpiptestlistComponent {

  text: string;

  constructor() {
    console.log('Hello IpiptestlistComponent Component');
    this.text = 'Hello World';
  }

}
