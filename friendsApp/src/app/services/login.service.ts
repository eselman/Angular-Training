import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<User[]>("http://localhost:3000/users"); 
  }

  getUser(userId: number) {
    return this.http.get<User>("http://localhost:3000/users/" + userId); 
  }

  login(user:User) {
    user.logged = true;
    return this.http.patch<User>("http://localhost:3000/users/" + user.id, user);
  }

  logout(user: User) {
    user.logged = false;
    return this.http.patch<User>("http://localhost:3000/users/" + user.id, user);
  }
}
