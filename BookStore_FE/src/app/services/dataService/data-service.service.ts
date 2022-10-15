import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  bookId : any
  message : any
  
  constructor() { }

  private messageSource = new BehaviorSubject([]);
  incomingData = this.messageSource.asObservable();

  outgoingData(message: any) {
    console.log(message)
    this.messageSource.next(message)
  } 

  

  setMessage(data : any){
    this.bookId = data
  }

  getMessage(){
    return this.bookId
  }
}
