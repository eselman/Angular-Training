import { Component, OnInit, Input } from '@angular/core';
import {User} from '../model/user.model';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @Input() public friend: User;
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUser(this.friend.id).subscribe(data => {
      this.friend = data;
    });
  }
}
