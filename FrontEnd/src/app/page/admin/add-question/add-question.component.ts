import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { QuestionServiceService } from 'src/app/MyService/question-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  quizId: any;
  quizTitle: any;
  question = {
    quizId: '',
    content: '',
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    answer: ''
  };
  constructor(private route: ActivatedRoute, private addquestion: QuestionServiceService,private router:Router) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['qid'];
    this.quizTitle = this.route.snapshot.params['title'];
    this.question.quizId = this.quizId;
  }

  async formSubmit() {
    if (this.question.content == null || this.question.content.trim() == '') {
      Swal.fire("Error", "Please Fill Content", "error");
      return
    }
    if (this.question.question1.trim() == '' || this.question.question1 == null) {
      Swal.fire("Error", "Please Fill option1", "error");
      return
    }
    if (this.question.question2.trim() == '' || this.question.question2 == null) {
      Swal.fire("Error", "Please Fill option2", "error");
      return
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      Swal.fire("Error", "Please Fill answer", "error");
      return
    }
    //Form Submit
    try{
      firstValueFrom(this.addquestion.addQuestion(this.question))
      

      Swal.fire("Success", "Question has been added successfully", 'success').then((e =>{ this.router.navigate(['/dashboard/view-questions/' + this.quizId + '/' + this.quizTitle])}));
      return;
    }
    catch(err){
      Swal.fire('Error', 'Something went wrong,try again after sometime', 'error');
    }
    // this.addquestion.addQuestion(this.question).subscribe(
    //   (data: any) => {
    //     this.question.content = '';
    //     this.question.option1 = '';
    //     this.question.option2 = '';
    //     this.question.option3 = '';
    //     this.question.option4 = '';
    //     this.question.answer = '';
    //     Swal.fire("Success", "Question has been added successfully", 'success')
    //   },
    //   err => {
    //     Swal.fire('Error', 'Something went wrong,try again after sometime', 'error');
    //   });
  }
}
