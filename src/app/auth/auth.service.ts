import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from "moment";

import { MenuItem } from '../model/menu-item';
import { User } from '../model/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public logon(racf: string, password: string) {
    // return this.http.post<User>('/api/logon', { racf, password })
    //   .pipe()
    //   .subscribe(res => {
    //     this.setSession(res);
    //     this.setActivatedRoutes(res);
    //   });
    let user: User = new User ({
      _access_token: "",
      _expireIn: 6827364283
    });

    this.setSession(user);
    this.setActivatedRoutes(user);

  }

  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  private getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private setSession(user: User) {
    const expiresAt = moment().add(user.expiresIn, 'second');

    localStorage.setItem('access_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));

    return authResult;
  }

  private setActivatedRoutes(authResult) {
    // this.http.post<MenuItem[]>('/api/getMenuItems', { authResult })
    //   .subscribe(res => {
    //   });

  }
}
