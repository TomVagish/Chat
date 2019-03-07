import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [AuthService],
  styles: [
    `
      .progressbarHideShow {
        visibility: hidden;
      }
    `
  ]
})
export class RegisterComponent implements OnInit {
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

  registerRequest(form: NgForm) {
    this.progressBarFlag = true;
    const email = form.value.email;
    const password = form.value.password;
    const username = form.value.username;

    const user = {
      Email: email,
      Password: password,
      Username: username
    };
    this.auth.register(user);
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
