import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  user: User;
  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
    .subscribe(user => {
      this.user = user;
    });
  }
}
