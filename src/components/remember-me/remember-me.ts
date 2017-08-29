import { Component } from '@angular/core';

/**
 * Generated class for the RememberMe component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'remember-me',
  templateUrl: 'remember-me.html'
})
export class RememberMeComponent {
  
  checked: boolean;


  constructor() {
    console.log('Hello RememberMe Component');
  }

  clickedRemember(){
    console.log("checked", this.checked);
    if(this.checked === true){
      console.log("User would like to be remembered");
      let checkParse = JSON.stringify(this.checked);
      window.localStorage.setItem('remembered', checkParse);
    } else if (this.checked === false) {
      console.log("User would NOT like to be remembered");
      window.localStorage.removeItem('remembered');
    }
  }
  
}
