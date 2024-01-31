import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/MyService/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent {
  qId:any;
  qTitle: any;
  addques = false;

  question = [{
    questionId: 0,
    content: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    answer: '',
    quiz: {
      quizId: '',
      quizTitle: '',
    }
  }];

  constructor(private route: ActivatedRoute, private questions: QuestionServiceService) { }

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this.qTitle = this.route.snapshot.params['title'];

    this.questions.getQuestionOfQuiz(this.qId).subscribe(
      (data: any) => {
        this.question = data;
      },
      err => {
        Swal.fire("Service Unavailable");
      });
      
      console.log(this.question );
  }
  
  //Delete Question
  deleteQuestion(questionId:number) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are You Sure,Do you want to delete this question'
    }).then(result => {
      if (result.isConfirmed) {
        this.questions.deleteQuestion(questionId).subscribe(
          (data : any) => {
            Swal.fire("Successfully", "Question has been deleted", 'success');
            this.question = this.question.filter((q) => q.questionId != questionId);
          },
          err => {
            Swal.fire('Error', 'Something went wrong', 'error');
          });
      }
    });
  }
}
