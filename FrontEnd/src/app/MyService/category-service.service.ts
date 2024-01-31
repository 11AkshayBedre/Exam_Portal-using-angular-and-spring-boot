import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http:HttpClient) { }
  public categories()
  {
  return this.http.get(`${baseUrl}/category`);
  }
  //add category
  public addcategory(category: any)
  {
  return this.http.post(`${baseUrl}/category`,category);
  }
}
