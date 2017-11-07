import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrganizationProvider } from '../providers/organization/organization';
 
@Injectable()
export class UsernameValidator {
 
  debouncer: any;
 
  constructor(public organizationProvider: OrganizationProvider){
 
  }
 
  checkUsername(control: FormControl): any {
 
    clearTimeout(this.debouncer);
 
    return new Promise(resolve => {
 
      this.debouncer = setTimeout(() => {
 
        this.authProvider.validateUsername(control.value).subscribe((res) => {
          if(res.ok){
            resolve(null);
          }
        }, (err) => {
          resolve({'usernameInUse': true});
        });
 
      }, 1000);     
 
    });
  }
 
}