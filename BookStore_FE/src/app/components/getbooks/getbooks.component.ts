import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  bookList : any
  booksCount : any
  bookById : any

  constructor(private bookService : BookService,
    private router : Router,
    private dataService : DataServiceService) { }

    
  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit() {
    this.bookService.getAllBooks().subscribe((response: any) => {
      console.log(response);
      this.bookList = response.data;
      this.booksCount = response.data.length;
      console.log(this.bookList);
      console.log(this.booksCount)
    })
  }
  quickView(bookId: any) {
    console.log(bookId)
    this.dataService.setMessage(bookId)
    this.router.navigateByUrl("/home/quickView")
  }
}
