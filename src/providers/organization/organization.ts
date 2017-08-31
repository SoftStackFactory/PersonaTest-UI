import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config'

/*
  Generated class for the OrganizationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OrganizationProvider {
  baseUrl: string = URL;
  path: string = "/Organization"
  
  constructor(public http: Http) {
    console.log('Hello OrganizationProvider Provider');
  }

  //becomeOrg( userId, name, website ) {
  becomeOrg() {
    return this.http.post(
      this.baseUrl + this.path +'/request',
      //{ userId, name, website }
      {}
    );
  }

}
