import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/MyService/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{
  category={
    categoryTitle:'',
    description:''
    }
  constructor(private categoryadd:CategoryServiceService){}
  ngOnInit(): void {
    
  }
  formSubmit() {
    if (this.category.categoryTitle.trim() == '' || this.category.description.trim() == '' || this.category == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are Required!',
      })
      return;
    }
    this.categoryadd.addcategory(this.category).subscribe(
      (data: any) => {
        this.category.categoryTitle = '';
        this.category.description = '';
        Swal.fire('Success', 'Category added successfully', 'success');
      },
      (err:any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  }


}
