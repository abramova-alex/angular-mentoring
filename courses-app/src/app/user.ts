import { IUser } from './iuser';

export class User implements IUser {
  constructor (public id: number,
               public name: string,
               public password: string) {

  }
}
