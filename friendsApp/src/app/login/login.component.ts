import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string; 
  password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.getUsers().subscribe(data => {
      let users: User[] = data;
      users.forEach(element => {
        if(element.username === this.userName && element.password === this.password) {
          if(element.logged) {
            this.router.navigate(['/user', element.id]);
          }  else {
            this.loginService.login(element).subscribe(data => {
              this.router.navigate(['/user', data.id]);
            })
          }
        }  
      }); 
    });
  }
}
