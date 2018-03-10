import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {
  currentUser: User = new User(1, 'Sasha', 'test');
  localStorageKey = 'courseUserName';

  constructor() { }

  login(): AuthService {
    localStorage.setItem(this.localStorageKey, this.currentUser.name);
    return this;
  }

  logout(): AuthService {
    localStorage.removeItem(this.localStorageKey);
    console.log('user has logged out');
    return this;
  }

  isAuthenticated(): Observable<boolean> {
    console.log('test');
    return Observable.of(!!localStorage.getItem(this.localStorageKey));
  }

  getUserInfo(): Observable<string> {
    return Observable.of(this.currentUser.name);
  }
}
