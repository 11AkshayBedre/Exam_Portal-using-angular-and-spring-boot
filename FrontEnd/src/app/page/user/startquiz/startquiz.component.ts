import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from 'src/app/MyService/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})
export class StartquizComponent {
  qid: any;
  question: any;
  marksGot = 0;
  correctAnswers = 0;
  attempted = 0;
  isSubmit = false;
  timer: any;

  constructor(private locationSt:LocationStrategy, private route: ActivatedRoute, private questions: QuestionServiceService) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.qid = this.route.snapshot.params['qid'];
    this.loadQuestions();
  }

  loadQuestions() {
    this.questions.getQuestionOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.question = data;
        this.question.forEach((q: any) => {
          this.timer = this.question.length * 2 * 60;
          q['givenAnswer'] = '';

        });
        this.startTimer();
      },
      err => {
        Swal.fire("Error", "Something Went Wrong", "error");
      });
  }

  preventBackButton() {
    history.pushState(null, "null", location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, "null", location.href);
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to Submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then(e => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }
    });
  }

  startTimer() {
    let t = window.setInterval(() => {
      if (this.timer <= 0) {
        this.submitQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }

  getFormattedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} Min:${ss} Sec`;
  }

  evalQuiz() {
    this.isSubmit = true;
    this.question.forEach((q: { givenAnswer: any; answer: any; }) => {
      if (q.givenAnswer == q.answer) {
        this.correctAnswers++;
        let marksSingle = this.question[0].quiz.maxMarks / this.question.length;
        this.marksGot += marksSingle;
      }
      if (q.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });
  }


  printPDF() {
    window.print();
  }
}
