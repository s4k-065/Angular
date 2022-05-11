import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { PlansComponent } from './plans/plans.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',component:SigninComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'details',component:DetailsComponent
  },
  {
    path:'plans',component:PlansComponent
  },
  {
    path:'cart',component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
