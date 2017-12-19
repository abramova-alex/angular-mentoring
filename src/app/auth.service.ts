import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AuthService {
  currentUser: User = new User(1, 'Sasha', 'test');
  localStorageKey: string = 'courseUserName';

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

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.localStorageKey);
  }

  getUserInfo(): string {
    return this.currentUser.name;
  }
}
