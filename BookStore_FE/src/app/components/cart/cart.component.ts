import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems : any
  cartQty : any
  cartBooks = new Array
  book : any
  reduce : any
  increase : any

  constructor(private bookService : BookService,
    private router : Router) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    this.bookService.getCart().subscribe((response: any) => {
      console.log(response);
      this.cartItems = response.data;
      console.log(this.cartItems)
      this.cartQty = this.cartItems.length;
      console.log(this.cartQty)
    })
  }

  reduceQty(bookId: any) {
    this.reduce = this.cartItems.filter((object: any) => {
      return object.bookId == bookId
    })
    console.log(this.reduce[0])
    let get = this.reduce[0]
    console.log(get.quantity)
    if(get.quantity > 1){
     let updateQty = get.quantity - 1
     let reqData = {
      cartId : get.cartId,
      quantity : updateQty
     }
     this.bookService.updateCart(reqData).subscribe((response : any) =>{
      console.log(response)
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home/cart']);
    });
     })
     this.router.navigateByUrl('/home/cart')
   } 

  }
  increaseQty(bookId: any) {
    this.increase = this.cartItems.filter((object: any) => {
      return object.bookId == bookId
    })
    console.log(this.increase)
    let get = this.increase[0]
    console.log(get.quantity)
    if(get.quantity > 0){
     let updateQty = get.quantity + 1
     let reqData = {
      cartId : get.cartId,
      quantity : updateQty
     }
     this.bookService.updateCart(reqData).subscribe((response : any) =>{
      console.log(response)
      this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home/cart']);
    });
     })
     
  }
}
}
