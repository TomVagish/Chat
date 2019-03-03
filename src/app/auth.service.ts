import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';


@Injectable()
export class AuthService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

   getToken() {
    return this.token;
  }

   // register request to server with user details!
   register(user: any) {
      return this.http.post('http://localhost:3000/users/register', user);
  }


 // login request to server with user details!
 login(user: any) {
   this.http.post<{token: string}>('http://localhost:3000/users/login', user)
 .subscribe(response => {
   // get the token from response after successful login!
    console.log(response);
  //   const token = response.token;
  //   this.token = token;
  //   console.log(this.token);

 });
}


    // post new post into Database!
    checkChatAuth(token: string) {

      const  headers =  { 'authorization': token };

      const requestOptions = {
        headers: new Headers(headers)
      };
        return this.http.post(`http://localhost:3000/chat`,requestOptions);
    }



}
