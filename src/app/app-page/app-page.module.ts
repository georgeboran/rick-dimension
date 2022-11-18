import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    FullComponent,
    CardContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppPageModule { }
