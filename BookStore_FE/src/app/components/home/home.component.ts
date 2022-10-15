import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/dataService/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  token : any

  isLoggegIn : any

  constructor(private router : Router,
    private dataService : DataServiceService) { }

    ngOnInit(): void {
      this.token = localStorage.getItem('token')
      if(this.token != undefined){
        this.isLoggegIn = true
      }
      else{
        this.isLoggegIn = false
      }
    }

  ngOnDestroy(): void {
    this.logout()
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('cartId');
    localStorage.removeItem('orderedCart');
    localStorage.removeItem('orderedBook');
    localStorage.removeItem('bookId');
    this.router.navigateByUrl('/login');
  }
  search(event : any){
    this.dataService.outgoingData(event.target.value)
  }
}
