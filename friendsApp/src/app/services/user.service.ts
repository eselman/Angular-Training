import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model'

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(userId: number){
    return this.http.get<User>("http://localhost:3000/users/" + userId); 
  }

  updateUser(user: User) {
    return this.http.patch<User>("http://localhost:3000/users/" + user.id, user);
  }
}
