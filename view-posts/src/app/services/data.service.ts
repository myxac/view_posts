import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../app.config';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers : any;
  constructor(
    private http: HttpClient,
  ) { 
    this.headers ={
      headers : new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
  }
  getAllPosts(): Observable<any>{
    return this.http.get(`${API_ENDPOINT}posts`,this.headers).pipe(
      tap(result =>{
        console.log('return posts list from API');
      }, error =>{
        console.log(error);
      })
    )
  }
  getOnePost(id: number): Observable<any>{
    return this.http.get(`${API_ENDPOINT}posts/${id}`,this.headers).pipe(
      tap(result =>{
        console.log('return one post from API');
      },error =>{
        console.log(error);
      })
    )
  }
  getPostComments(id : number){
    return this.http.get(`${API_ENDPOINT}posts/${id}/comments`,this.headers).pipe(
      tap(result =>{
        console.log('return comments from API');
      },error =>{
        console.log(error);
      })
    )
  }
}
