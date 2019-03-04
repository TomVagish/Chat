
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isAuth = this.authService.IsAuthenticated();
    console.log(isAuth);
    if(!isAuth){
      this.router.navigate(['/chat']);
    }
    this.router.navigate(['/']);
    return isAuth;
    // navigate to login page

    // you can save redirect url so after authing we can move them back to the page they requested
    // return false;
  }

}
