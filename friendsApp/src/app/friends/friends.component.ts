import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute) { }
  
  user: User;
  friends: User[];
  ngOnInit() {
    this.route.paramMap
     .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
     .subscribe(user => {
       this.user = user;
       this.friends = this.user.friends;
    });
  }
}
