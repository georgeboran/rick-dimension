import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { HomeComponent } from './home/home.component';
import { CartasComponent } from './cartas/cartas.component';
import { FormSearchComponent } from '../shared/form-search/form-search.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule( {
  declarations: [
    FullComponent,
    CardContainerComponent,
    HomeComponent,
    CartasComponent,
    FormSearchComponent,
  ],
  imports: [ CommonModule, InfiniteScrollModule ],
} )
export class AppPageModule { }
