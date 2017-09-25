import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import {Post} from '../model/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  user:User;
  postContent: string;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
    .subscribe(user => {
      this.user = user;
   });
  }

  savePost() {
    let post: Post = new Post();
    post.content = this.postContent;
    post.likes = 0;
    let currentDate: Date = new Date();
    let postDate:string = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    post.date = postDate;
    let postTime:string = currentDate.getHours() + ":" + currentDate.getMinutes();
    post.time = postTime;
    post.id = currentDate.getTime();
    this.user.posts.push(post);
    this.userService.updateUser(this.user).subscribe(user => {
      this.user = user;
      this.router.navigate(["/posts", this.user.id]);
   });
  }
}
