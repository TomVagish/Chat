import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }



  ngOnInit() {
  }


  registerRequest(form: NgForm){

    const email = form.value.email;
    const password = form.value.password;

    console.log(email);
    console.log(password);

  }

}
