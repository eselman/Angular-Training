import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }
  
  user: User;
  posts: Post[];
  ngOnInit() {
    this.route.paramMap
     .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
     .subscribe(user => {
       this.user = user;
       this.posts = this.user.posts;
    });
  }

  addPost() {
    this.router.navigate(["new-post", this.user.id]);
  }
}
