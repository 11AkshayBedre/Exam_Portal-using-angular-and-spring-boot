import { Component } from '@angular/core';
import { CategoryServiceService } from 'src/app/MyService/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  categories: any;
  constructor(private cat:CategoryServiceService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe(
    (data:any)=>{
     this.categories=data;
    },
    err=>{
    Swal.fire('Oh!Sorry','Server Busy,please try again','error');
    });
  }
}
