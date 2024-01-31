import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CategoryServiceService } from 'src/app/MyService/category-service.service';
import { QuizServiceService } from 'src/app/MyService/quiz-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _quiz: QuizServiceService, private cat: CategoryServiceService, private router: Router) { }
  quizId = 0;
  quiz = {
    quizTitle: '',
    description: '',
    maxMarks: '',
    noOfQuestion: '',
    isActive: true,
    categoryId:''
  };
  categories: any;
  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];
    this._quiz.getQuiz(this.quizId).subscribe(
      (data: any) => {
        this.quiz = data;
      });

    this.cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      })

  }

  //update form
  async updateForm() {
    try {
      firstValueFrom(this._quiz.updateQuiz(this.quiz, this.quizId))
      this.quiz.quizTitle = '';
      this.quiz.description = '';
      this.quiz.maxMarks = '';
      this.quiz.noOfQuestion = '';
      this.quiz.isActive = false;
      this.quiz.categoryId =' ';
      Swal.fire('Success', 'Quiz has been updated', 'success').then((e => {
        this.router.navigate(['dashboard/quiz'])
      }));
    }
    catch (err) {
      Swal.fire('Error', 'Something went wrong', 'error');
    }

  }
}
