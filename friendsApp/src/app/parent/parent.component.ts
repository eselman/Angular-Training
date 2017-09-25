import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../services/user.service';
import {LoginService} from '../services/login.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private userService: UserService, 
              private loginService: LoginService,  
              private route: ActivatedRoute,
              private router: Router) { }
  
    user: User;
    ngOnInit() {
      this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => {
        this.user = user;
      });
    }

    logout() {
      this.loginService.logout(this.user).subscribe(data => {
        this.router.navigate(["/login"]);
      });
    }
}
