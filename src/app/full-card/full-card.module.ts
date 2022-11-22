import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CartasComponent } from './cartas/cartas.component';
import { FormSearchComponent } from '../shared/form-search/form-search.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule( {
  declarations: [
    CardDetailsComponent
    , CardContainerComponent,
    CartasComponent,
    FormSearchComponent,
  ],
  imports: [
    CommonModule, InfiniteScrollModule
  ]
} )
export class FullCardModule { }
