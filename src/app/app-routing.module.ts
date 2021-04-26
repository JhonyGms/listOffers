import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes

import { OfferComponent } from "./components/offer/offer.component"
import { PricesComponent } from "./components/prices/prices.component"
import { CharacteristicsComponent } from "./components/characteristics/characteristics.component"

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
  }
  ,
  {
    path: 'home',
    component: OfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
