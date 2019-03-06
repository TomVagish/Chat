import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable, of } from 'rxjs';
@Injectable()
export class AuthService {

private token: string;
private isAuthenticated = false;
private authStatusListener = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {
  }

    getToken() {
    return  this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  IsAuthenticated() {
    return JSON.parse(localStorage.getItem('LoggedInUser'));
  }


  setToken(setToken: string){
    this.token = setToken;
  }

   // register request to server with user details!
   register(user: any) {
      return this.http.post('http://localhost:3000/users/register', user)
      .subscribe(res =>{
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(error.error.message);
      });
  }


 // login request to server with user details!
 login(user: any) {
   return this.http.post<{token: string}>('http://localhost:3000/users/login', user)
 .subscribe(response => {
   // get the token from response after successful login!
   const token = response.token;
   this.token = token;
   if (token) {
    this.isAuthenticated = true;
    localStorage.setItem('LoggedInUser',JSON.stringify(this.isAuthenticated));
    this.router.navigate(['/chat']);
   }

 }, error => { this.authStatusListener.next(error.error.message); } );

}


logout() {
  localStorage.removeItem('LoggedInUser');
  this.router.navigate(['/']);
}

}
