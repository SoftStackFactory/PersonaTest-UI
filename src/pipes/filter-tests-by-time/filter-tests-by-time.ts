import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterTestsByTimePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'testsByTime',
})
export class FilterTestsByTimePipe implements PipeTransform {
  /*
   * Takes an array of test objects and filters only tests from length of time
   * The current options: past six months, past year, two years or no argument
   *
   */
   
  //Create a new Date object (today) so we can use it to compare
  todayDate: Date = new Date();
  
  transform( testObjs: {date: Date}[] , timeArgument: string) {
    console.log("Pipe works.  Filtering tests by " + timeArgument);
    
    //Pass in the time argument so we can filter out tests that are older than the time argument
    //that was passed in; This variable stores the the cut off date
    var oldDate = this.getTimeDifference(timeArgument);
    
    //If we do not pass in an old date, do not filter our array and just return it unchanged
    if( oldDate == null ){
      return testObjs;
    
    //If we do pass in an old date; continue
    }else {
    
      //Filter out our tests array; only return tests that have been taken before
      //the cut off date (eg. within six months, or one year, or two years)
      testObjs = testObjs.filter( (v) =>  {
          console.log("The test date is " + v.date + " and the cut off date is " + oldDate)
          return v.date  > oldDate;
        }
      );
      
      //Return the array after it's been filtered
      return testObjs;
    }
  }
  
  
  //Subtract current date by the time argument passed in and return it (eg: 2 years in the past)
  getTimeDifference(timeArg): Date{
    var d = new Date();
    switch(timeArg) {
        //Return a Date six months in the past
        case 'Past Six Months':
          d.setMonth(d.getMonth() - 6);
          console.log("Case " + timeArg);
          break;
        //Return a Date one year in the past
        case 'Past Year':
          d.setFullYear(d.getFullYear() - 1);
          console.log("Case " + timeArg);
          break;
        //Return a Date two years in the past
        case 'Past Two Years':
          d.setFullYear(d.getFullYear() - 2);
          console.log("Case " + timeArg);
          break;
        //If no time argument is passed in, return a null object
        default:
          console.log("No time argument passed in " + timeArg);
          d = null;
          break;
    }
      
    return d; 
  }
  
}
