import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private router: Router, private auth: AuthService) { }

  // subscribe on error in Auth service
  private authStatusSub: Subscription;

  flagAlert = false;
  ErrorContent: string;

  ngOnInit() {

   this.authStatusSub =  this.auth.getAuthStatusListener()
   .subscribe(authStatus =>{
    this.ErrorContent = authStatus;
     this.showAlert();
   });


    if(this.auth.IsAuthenticated()){
      this.router.navigate(['/chat'])
    }

  }

  showAlert(){

    setTimeout(()=>{
this.ErrorContent = null;
    },5000)
  }



ngOnDestroy() {
  this.authStatusSub.unsubscribe();
}

// login request send to AuthService with user data
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
