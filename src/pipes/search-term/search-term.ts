import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchTermPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'searchTermPipe',
})
export class SearchTermPipe implements PipeTransform {
  /**
   * Takes an array of test objects and returns the ones that match the input string
   */
  transform( testsObj: { name: string }[], searchTerm: string) {

    //if the search value is an empty string don't filter the items and just return 
    if (!searchTerm) {
      return testsObj;
    }
    
    //filter out the relevant search results
    testsObj = testsObj.filter((v) => {
      if(v.name && searchTerm) {
        if (v.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    return testsObj; 
  }
  
  
  
  
}
