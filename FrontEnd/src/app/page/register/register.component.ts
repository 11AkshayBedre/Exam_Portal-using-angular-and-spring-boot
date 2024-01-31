import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/app/MyService/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  user =
    {
      userName: '',
      password: '',
      emailId: '',
      firstName: '',
      lastName: '',
      contactNo: '',
      roleID : 2
      
    }

  constructor(private userService: UserService) { }
 
  

  formSubmit() {
    if (this.user.userName == '' || this.user == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username is Required!',
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(response =>{
     console.log('User created successfully', response);
      //success
      
      //end
      },

      err =>{
      //error
      if (err instanceof HttpErrorResponse) {
  
        if (err.status === 200) {
          Swal.fire('Success','You have succesfully registered','success');
          // Handle success (if needed)
        } else {
         Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Username or email is already Exist,please try another Username!',
      })
        }
        }
     
    
    })
  }
  

  
  ngOnInit(): void {
   
  }
}
