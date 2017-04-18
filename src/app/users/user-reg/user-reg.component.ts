import { UserService } from './../user.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  newUser : User
  constructor(private _userService : UserService) {
    this.newUser = new User()
  }

  ngOnInit() {
  }

  createUser(){
    var loggedInUser = this._userService.createUser(this.newUser);
    console.log("Logged in user: ")
    this.newUser = new User
  }
}
