import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  constructor(private http:HttpClient) { }
  //getQuestion of quiz this can use admin
  public getQuestionOfQuiz(qid:any)
  {
  return this.http.get(`${baseUrl}/questions/${qid}`);
  }
  //get question for test, this is for user
  public getQuestionOfQuizForTest(qid: any)
  {
  return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  //add Question
  public addQuestion(question: any)
  {
  return this.http.post(`${baseUrl}/question`,question);
  }
  //delete Question
  public deleteQuestion(questionId:number)
  {
  return this.http.delete(`${baseUrl}/question/${questionId}`);
  }
}
