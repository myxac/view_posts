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
  getData(path : string): Observable<any>{
    return this.http.get(`${API_ENDPOINT}${path}`,this.headers).pipe(
      tap(result =>{
        console.log('return posts list from API');
      }, error =>{
        console.log(error);
      })
    )
  }
  addImg(array : any, isObject : boolean =false){
    let path ="https://material.angular.io/assets/img/examples/shiba2.jpg";
    isObject? array.image = path:
    array.forEach((item: { image: string; }) =>{
       item.image = path
    });
    return array;
  }
}
