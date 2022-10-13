import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  /* private messageSource = new BehaviorSubject([]);
  incomingData = this.messageSource.asObservable();

  outgoingData(message: any) {
    console.log(message)
    this.messageSource.next(message)
  } */
  message : any

  setMessage(data : any){
    this.message = data
  }

  getMessage(){
    return this.message
  }
}
