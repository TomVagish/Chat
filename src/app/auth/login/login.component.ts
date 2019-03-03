import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private auth: AuthService) { }

  private token: string;

  ngOnInit() {
  }



  loginRequest(form: NgForm) {


    const email = form.value.email;
    const password = form.value.password;

    const user = {
        Email: email,
        Password: password
    };
    this.auth.login(user);


  }
}
