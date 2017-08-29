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
   * Takes an array of test objects and returns the ones whose 'name' property has the input string
   */
  transform( ourList: { name: string }[], searchTerm: string) {

    //if the search value is an empty string don't filter the items and just return 
    if (!searchTerm) {
      return ourList;
    } 
    
    //else filter out the relevant search results
    ourList = ourList.filter((v) => {
      if( v.name ) {
        //return true if search term exists within the name property of your object
        return (v.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) ;
      }
    });

    return ourList; 
  }
  
  
  
  
}
