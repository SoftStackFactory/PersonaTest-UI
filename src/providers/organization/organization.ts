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
  path: string = "/Organizations"
  
  constructor(public http: Http) {
    console.log('Hello OrganizationProvider Provider');
  }

  becomeOrg( token, userId, name, website ) {
    return this.http.post(
      this.baseUrl + this.path +'/request?access_token=' + token,
      { userId, name, website }
    );
  }
  
  register(newOrgData) {
    return this.http.post(
      this.baseUrl + this.path,
      newOrgData
      );
  }
  
  // validateName(name) {
  //   return this.http.get(
  //     this.baseUrl + this.path + '/?filter[fields][name]=true'
  //     )
  // }
  

}
