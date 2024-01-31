import { Component } from '@angular/core';
import { QuizServiceService } from 'src/app/MyService/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
  
  quizzes = [{
    quizId: '',
    quizTitle: '',
    description: '',
    maxMarks: '',
    noOfQuestion: '',
    category: {
      categoryId: '',
      categoryTitle: ''
    }
  }];

  constructor(private quiz: QuizServiceService) { }

  ngOnInit(): void {
    this.quiz.quizzes().subscribe((data: any) => {
      this.quizzes = data;
    },
      err => {
        Swal.fire("Error in Loading Data")
      });
  }

  //delete Quiz
  deleteQuiz(quizId: any) {

    Swal.fire({
      icon: 'info',
      title: 'Are You Sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        this.quiz.deleteQuiz(quizId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.quizId != quizId);
            Swal.fire('Success', 'Successfully Deleted', 'success');
          },
          err => {
            Swal.fire('error', 'Something went wrong', 'error')
          });
      }

    });
  }


}
