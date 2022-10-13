import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {

  bookList : any
  booksCount : any

  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.bookService.getAllBooks().subscribe((response : any) =>{
      console.log(response);
      this.bookList = response.data;
      this.booksCount = response.data.length;
      console.log(this.bookList);
      console.log(this.booksCount)
    })
  }
}
