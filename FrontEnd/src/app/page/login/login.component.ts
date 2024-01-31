import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/MyService/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import baseUrl from 'src/app/MyService/config';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = { userName: '', password: '' };
  userRole = 0;

  constructor(
    private login: LoginService,
    private router: Router
  ) { }
  ngOnInit(): void {

  }

  formSubmit() {
    if(this.loginData.userName.trim() ==''&& this.loginData.password.trim() == '' ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username  and password are Required!',
      })
      return ;
    }
    if (this.loginData.userName.trim() == '' || this.loginData == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username is Required!',
      })
      return ;
    }
    if (this.loginData.password.trim() == '' || this.loginData == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password is Required!',
      })
      return ;
    }

    

    this.login.getCurrentUser(this.loginData.userName, this.loginData.password).subscribe(
      (response: any) => {

        this.login.setUser(response);
        console.log(response);
        Swal.fire('Success','You have succesfully login','success');
        if (this.login.getUserRole1()=="Admin") {
          this.router.navigate(['dashboard'])
          this.login.loginStatusSubject.next(true)
        }
        else if (this.login.getUserRole1()=="user") {
          this.router.navigate(['user-dashboard'])
          this.login.loginStatusSubject.next(true)
          
        }
        else {
          console.log("erro");
        }
      },
      (error: any)=>{
        //error
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Login Details,Try again!!',
        });
      }); 
  }
}



