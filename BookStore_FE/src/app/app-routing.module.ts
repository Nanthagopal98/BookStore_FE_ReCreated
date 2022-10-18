import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component : ForgotComponent},
  {path:'reset/:token', component : ResetComponent},
  {path :'home', component : HomeComponent,
  children : [
    {path:'', redirectTo:"/home/books", pathMatch:'full' },
    { path: 'books', component:GetbooksComponent},
    { path : 'quickView', component:QuickViewComponent},
    { path : 'cart', component : CartComponent}
  ]
}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
