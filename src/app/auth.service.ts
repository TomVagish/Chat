import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable, of } from 'rxjs';
@Injectable()
export class AuthService {

private token: string;
private isAuthenticated = false;

  constructor(private http: HttpClient, private router: Router) {}

    getToken() {
    return  this.token;
  }



  IsAuthenticated() {
    return this.isAuthenticated;
  }

  setToken(setToken: string){
    this.token = setToken;
  }

   // register request to server with user details!
   register(user: any) {
      return this.http.post('http://localhost:3000/users/register', user);
  }


 // login request to server with user details!
 login(user: any) {
   return this.http.post<{token: string}>('http://localhost:3000/users/login', user)
 .subscribe(response => {
   // get the token from response after successful login!
   const token = response.token;
   this.token = token;
   if(token){
    this.isAuthenticated = true;
    this.router.navigate(['/chat']);
   }


 });

}

}
