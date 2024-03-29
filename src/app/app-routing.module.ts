import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './full-card/card-container/card-container.component';
import { CardDetailsComponent } from './full-card/card-details/card-details.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cartas',
    component: CardContainerComponent,
  },
  {
    path: 'details/:id',
    component: CardDetailsComponent
  }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, {
    // Restore the last scroll position
    scrollPositionRestoration: "enabled",
    scrollOffset: [ 0, 0 ],
    // Enable scrolling to anchors
    anchorScrolling: "enabled",
  } ) ],
  exports: [ RouterModule ],
} )
export class AppRoutingModule { }
