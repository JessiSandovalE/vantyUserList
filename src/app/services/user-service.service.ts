import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import  { USERS }  from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
