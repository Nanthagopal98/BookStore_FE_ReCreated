import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterBook:string) {
    if (filterBook === ''){
      return value;
    }

    const books = [];
    for(const book of value){
      if (book.bookName.includes(filterBook)){
        books.push(book)
      }
    }
    return books;
  }
}
