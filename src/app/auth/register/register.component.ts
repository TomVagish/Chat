import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({selector: 'app-register',
 templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
  })
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private auth: AuthService) {}

    ngOnInit() {

    if(this.auth.IsAuthenticated()){
      this.router.navigate(['/chat'])
    }
    }

    registerRequest(form: NgForm) {

        const email = form.value.email;
        const password = form.value.password;
        const username = form.value.username;

        const user = {
            Email: email,
            Password: password,
            Username: username
        };
        this
            .auth
            .register(user);


    }

}
