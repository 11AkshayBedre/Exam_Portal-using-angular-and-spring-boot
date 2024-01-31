import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';

import { LoginService } from 'src/app/MyService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user: any;
  isLoggedIn = false;

  constructor(private login: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();

    this.login.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.login.isLoggedIn();
      this.user = this.login.getUser();
    });
    console.log(this.isLoggedIn);
  }
  public logout() {
    this.login.logout();
    window.location.reload();
  }


}

