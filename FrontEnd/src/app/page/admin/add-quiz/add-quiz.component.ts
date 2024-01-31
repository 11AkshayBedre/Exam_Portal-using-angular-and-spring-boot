import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CategoryServiceService  } from 'src/app/MyService/category-service.service';
import { QuizServiceService } from 'src/app/MyService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
  categories = [];
  quizData = {
    quizTitle: '',
    description: '',
    maxMarks: '',
    noOfQuestion: '',
    isActive: true,
    categoryId:''
  };
  constructor(private cat: CategoryServiceService, private quiz:QuizServiceService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      err => {
        Swal.fire("Error in Loading data from server")
      });
  }

  //addQuiz
  async addQuiz() {
    if (this.quizData.quizTitle.trim() == '' || this.quizData.description.trim() == '' || this.quizData.maxMarks == '' || this.quizData.noOfQuestion == '' || this.quizData.categoryId == ' ' || this.quizData == null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are Required!',
      });
      return;
    }
    try{
      firstValueFrom(this.quiz.addQuiz(this.quizData));
      this.quizData.quizTitle = '';
      this.quizData.description = '';
      this.quizData.maxMarks = '';
      this.quizData.noOfQuestion = '';
      this.quizData.isActive = false;
      this.quizData.categoryId =' ';
      Swal.fire('success', 'Quiz has been added succesfully', 'success');
    } catch (err) {
      Swal.fire('Error','Something went wrong!!');
    }
  }

}
