import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {

  let isLoggedIn = inject(LoginService).isLoggedIn();
  let service = inject(LoginService);

  let router = inject(Router);

  let role = inject(LoginService).getUserRole1();


  if (isLoggedIn && role=="Admin") {
    return true;
  }
  else {
    service.logout();
    router.navigate(['login']);
    return false;
  }
  // return true;
};
