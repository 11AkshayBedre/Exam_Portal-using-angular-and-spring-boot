import { Injectable } from '@angular/core';
import baseUrl from './config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  constructor(private http: HttpClient) { }

  //get all quizzes
  public quizzes() {
    return this.http.get(`${baseUrl}/quiz`);
  }
  //addQuiz()
  public addQuiz(quiz: any) {
    return this.http.post(`${baseUrl}/quiz`, quiz)
  }
  //delteQuiz
  public deleteQuiz(qId: number) {
    return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }
  //get the single quiz
  public getQuiz(quizId: any) {
    return this.http.get(`${baseUrl}/quiz/${quizId}`);
  }
  //update quiz
  public updateQuiz(quiz: any,id:number) {
    return this.http.put(`${baseUrl}/quiz/${id}`,quiz);
  }
  //get quizzes of category
  public getQuizOfCategory(cid: any) {
    return this.http.get(`${baseUrl}/category/${cid}`);
  }
  //get Active Quizzes
  public getActiveQuizzes() {
    return this.http.get(`${baseUrl}/quiz/active`);
  }
  //get Active Quizzes of category 
  public getActiveQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
