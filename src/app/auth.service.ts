import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { Observable, of } from "rxjs";
import { async } from '@angular/core/testing';
@Injectable()
export class AuthService {
  private token: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<string>();
  private usernameCurrentUser = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  getusernameCurrentUser() {
    return this.usernameCurrentUser.asObservable();
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  IsAuthenticated() {
    return JSON.parse(localStorage.getItem("LoggedInUser"));
  }

  setToken(setToken: string) {
    this.token = setToken;
  }

  // register request to server with user details!
  register(user: any) {
    return this.http
      .post("http://localhost:3000/users/register", user)
      .subscribe(
        res => {
          this.router.navigate(["/"]);
        },
        error => {
          this.authStatusListener.next(error.error.message);
        }
      );
  }

  // login request to server with user details!
  login(user: any) {
    return this.http
      .post<{ token: string; username: string }>(
        "http://localhost:3000/users/login",
        user
      )
      .subscribe(
        response => {
          this.usernameCurrentUser.next(response.username);
          localStorage.setItem("CurrentUsername", response.username);
          // get the token from response after successful login!
          const token = response.token;
          this.token = token;
          if (token) {
            this.isAuthenticated = true;
            localStorage.setItem(
              "LoggedInUser",
              JSON.stringify(this.isAuthenticated)
            );
            this.router.navigate(["/chat"]);
          }
        },
        error => {
          this.authStatusListener.next(error.error.message);
        }
      );
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("CurrentUsername");
    this.router.navigate(["/"]);
  }


  getonlineUsers(room: any)   {
    return  this.http.post('http://localhost:3000/onlineUsers/getOnlineUsers', room);
  }

  onlineUsers(onlineUser: any) {
    return this.http
      .post('http://localhost:3000/onlineUsers', onlineUser)
      .subscribe(data => {
        console.log(data);
      });
  }

    deleteFromOnlineUsers(username: any) {
      return this.http.post('http://localhost:3000/onlineUsers/deleteUser', username);
    }
}
