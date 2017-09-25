import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../model/post.model';
import {User} from '../model/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() public post: Post;
  @Input() public user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addLike() {
    this.post.likes = this.post.likes + 1;
    this.user.posts.forEach(element => {
      if(element.id === this.post.id) {
          element.likes = this.post.likes;
      }  
    });
    this.userService.updateUser(this.user).subscribe(user => {
      this.user = user;
   });
  }
}
