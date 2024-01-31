import { Component } from '@angular/core';
import { CategoryServiceService } from 'src/app/MyService/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  categories = [
    {
      categoryTitle: '',
      description: ''
    }
  ];
  constructor(private category: CategoryServiceService) { }

  ngOnInit(): void {
    this.category.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      err => {
        Swal.fire('Error!!', 'Error in loading data', 'error')
      });
  }
}
