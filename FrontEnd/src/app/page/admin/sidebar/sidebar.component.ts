import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/MyService/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(private login:LoginService){}

  logout(){
    this.login.logout();
    window.location.reload();
    
  }

}
