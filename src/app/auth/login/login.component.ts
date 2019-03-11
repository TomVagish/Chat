import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { Subscription } from "rxjs";
import { Element } from "@angular/compiler";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService],
  styles: [
    `
      .progressbarHideShow {
        visibility: hidden;
      }
    `
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private auth: AuthService) {}

  // subscribe on error in Auth service
  private authStatusSub: Subscription;

  flagAlert = false;
  ErrorContent: string;
  progressBarFlag = false;

  ngOnInit() {
    this.authStatusSub = this.auth
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.ErrorContent = authStatus;
        this.progressBarFlag = false;
        this.showAlert();
      });

    if (this.auth.IsAuthenticated()) {
      this.router.navigate(["/chat"]);
    }
  }

  showAlert() {
    setTimeout(() => {
      this.ErrorContent = null;
    }, 5000);
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }

  // login request send to AuthService with user data
  loginRequest(form: NgForm) {
    this.progressBarFlag = true;
    const email = form.value.email;
    const password = form.value.password;

    const user = {
      Email: email,
      Password: password
    };
    this.auth.login(user);
  }
}
