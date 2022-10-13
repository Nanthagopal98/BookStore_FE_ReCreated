import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';
import { EmptyExpr } from '@angular/compiler';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  bookById : any
  bookId : any
  review : any
  currentRate : any
  feedbackList : any

  constructor(private bookService : BookService,
    private router : Router,
    private dataService : DataServiceService) { }


  ngOnInit(): void {
    this.quickView()
    this.getFeedback()
  }
  
  quickView() {
    this.bookId = this.dataService.getMessage()
    this.bookService.getBookById(this.bookId).subscribe((response: any) => {
      console.log(response)
      this.bookById = response.data
      console.log(this.bookById)
    })
  }

  getFeedback(){
    this.bookService.getFeedback(this.bookId).subscribe((response : any) => {
      console.log(response);
      this.feedbackList = response.data
      console.log(this.feedbackList)
    })
  }
}


