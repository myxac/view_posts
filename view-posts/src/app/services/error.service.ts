import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
  ) { }
  showError(message: string){
    alert(message);
  }
}