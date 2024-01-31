
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route, state) => {

  let isLoggedIn = inject(LoginService).isLoggedIn();
  let service = inject(LoginService);

  let router = inject(Router);

  let role = inject(LoginService).getUserRole1();


  if (role =="user") {
    return true;
  }
  else {
    service.logout();
    router.navigate(['']);
    return false;
  }
  // return true;

};