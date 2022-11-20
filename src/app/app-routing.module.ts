import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './full-card/card-container/card-container.component';
import { CardDetailsComponent } from './full-card/card-details/card-details.component';

const routes: Routes = [
  {
    path: '',
    component: CardContainerComponent,
    pathMatch: 'full',
  }, {
    path: 'cartas',
    component: CardContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: CardDetailsComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule { }
