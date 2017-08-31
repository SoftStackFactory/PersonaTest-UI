import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL } from '../../assets/provider-config';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppUserProvider {
  baseUrl: string = URL;
  path: string = "/AppUsers"
  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  
  register(newUserData) {
    return this.http.post(
      this.baseUrl + this.path,
      newUserData
      );
  }
  
  login(UserData) {
    return this.http.post(
      this.baseUrl + this.path + "/login",
      UserData
    );
  }
  
  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + '/logout' + 
      '?access_token=' + token,
      {}
      );
  }
  
  delete(id, token) {
    console.log('delete:' + this.baseUrl + this.path + '/' + id + 
      '?access_token=' + token);
    return this.http.delete(
      this.baseUrl + this.path + '/' + id + 
      '?access_token=' + token
    );
  }
  
  resetPassword(email) {
    return this.http.post(
      this.baseUrl + this.path,
      email
    );
  }
  
  changePassword(id, token, password) {
    return this.http.patch(
      this.baseUrl + this.path + '/' + id +
      '?access_token=' + token,
      password
    );
  }
  
  changeAccount(id, token, userData) {
    return this.http.patch(
      this.baseUrl + this.path + '/' + id +
      '?access_token=' + token,
      userData
    );
  }
  
}
