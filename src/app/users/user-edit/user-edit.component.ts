import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { User } from './../user';


@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

    constructor( private _userService : UserService) {
    }

    ngOnInit() {  

    }
    deleteUser(id : string){
        this._userService.deleteUser(id);
    }
    editUser(id){
        console.log(id)
    }
}
