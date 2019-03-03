import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

   // register request to server with user details!
   register(user: any) {
      return this.http.post('http://localhost:3000/users/register', user);


  }
}
