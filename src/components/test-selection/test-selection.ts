import { Component } from '@angular/core';

/**
 * Generated class for the TestSelectionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'test-selection',
  templateUrl: 'test-selection.html'
})
export class TestSelectionComponent {

  //Variable to store array of test as an array of objects and mock data (thanks Jenny)
  availableTests: { name: string, description: string }[] =
  [{name: "Goldberg's Big Five", description: "some text"}, 
  {name:"Markey and Markey's", description: "some text"},
  {name: "Costa and McCrae's NEO Facets", description: "some text"},
  {name:"Johnson's 120 Item NEO", description: "some text"}];
  testDescriptions: any
  

  constructor() {
    console.log('Hello Test Selection Component');
    /*this.availableTests = 
      [{name: "Goldberg's Big Five", description: "some text"}, 
      {name:"Markey and Markey's", description: "some text"},
      {name: "Costa and McCrae's NEO Facets", description: "some text"},
      {name:"Johnson's 120 Item NEO", description: "some text"}];
    function(){
        for (i = 0,  len = this.availableTests.length; i < len; i++) {
          return this.testDescriptions += 
            this.availableTests[i][name] + ": " + 
            this.availableTests[i][description] + "/n";
        }
        */
  }

}
