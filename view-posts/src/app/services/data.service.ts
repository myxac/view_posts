import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_ENDPOINT } from '../app.config';
import { Observable } from 'rxjs';
import { tap, map } from "rxjs/operators";
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers : any;
  constructor(
    private http: HttpClient,
    public errorService : ErrorService
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
        this.errorService.showError(error.message);
      })
    )
  }
}
