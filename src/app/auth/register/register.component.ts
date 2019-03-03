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

    ngOnInit() {}

    registerRequest(form: NgForm) {

        const email = form.value.email;
        const password = form.value.password;

        const user = {
            Email: email,
            Password: password
        };
        this
            .auth
            .register(user)
            .subscribe((res) => {
              console.log(res);
            });


    }

}
