import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token = localStorage.getItem('token')

  constructor(private httpService : HttpService) { }

  getAllBooks(){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('Book/GetAllBooks',true,header)
  }

  getBookById(bookId:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('Book/GetBookById?bookId='+bookId,true,header)
  }

  getFeedback(bookId:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('FeedBack/GetAllFeedback?bookId='+bookId,true,header)
  }
}
