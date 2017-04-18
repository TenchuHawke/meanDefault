import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from "app/users/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userService : UserService
  constructor(userService : UserService) {
    this.userService = userService
    userService.LoggedInUser = new User
  }

  ngOnInit() {
        this.userService.LoggedInUser._id='1adssad';
  }

}
