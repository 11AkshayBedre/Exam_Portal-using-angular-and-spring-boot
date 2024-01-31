import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import baseUrl from './config';
import { forwardRef } from '@angular/core';
import { LoginComponent } from '../page/login/login.component';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  user: any;
  userRole = 0;
  value: boolean = true;
  public loginStatusSubject = new Subject<boolean>();

  public getCurrentUser(userName: string, password: string) {
    this.user = this.http.get(`${baseUrl}/user/${userName}/${password}`);
    return this.user;
  }
  public getUser() {
    let userStr = localStorage.getItem("user");
    if (userStr != null) {
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }


  public getUserRole1() {
    let user = this.getUser();
    return user.role.roleName;
  }

  public isLoggedIn() {
    let use = localStorage.getItem('user');
    if (use == undefined || use == '' || use == null) {
      return false
    }
    else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('user');
    return true;
  }

}
