import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/MyService/quiz-service.service';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent {
  categoryId: any;
  quizzes: any;
  constructor(private route: ActivatedRoute, private quiz: QuizServiceService) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['catId'];
    this.route.params.subscribe((params) => {
      this.categoryId = params['catId'];
      if (this.categoryId == "AllQuizzes") {
        this.quiz.getActiveQuizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
          })
      }

      else {
        this.quiz.getActiveQuizzesOfCategory(this.categoryId).subscribe((data: any) => {
          this.quizzes = data;
        }, err => {
          alert("Something went wrong")
        });
      }

    });

  }

}
