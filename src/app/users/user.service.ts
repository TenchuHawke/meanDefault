import { Injectable } from '@angular/core';
import { Http, Request, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs"
import { User } from './user';



@Injectable()
export class UserService {
    USERS : User[] = []
    LoggedInUser : User
    constructor(private http: Http) {
        this.get_users()
        this.LoggedInUser = null
    }
    get_users(){
        this.http.get('/users')
            .map((response : Response) => response.json())
            .subscribe(data => {this.USERS = data}, e=> console.log(e), () => console.log("UserService.Get: Continue."))
    }
    createUser(user : User){
        const headers = new Headers({"Content-Type": "application/json"})
        const options = new RequestOptions({headers: headers})
        console.log(this.LoggedInUser)
        // this.http.post("/createUser", user, options).subscribe(response => this.get_users())
        this.http.post("/createUser", user, options).subscribe(response => this.get_users())
        console.log (this.LoggedInUser)
    }
    deleteUser(id : string){
        this.http.delete("/deleteUser/"+id).subscribe(response => this.get_users())
    }
}
