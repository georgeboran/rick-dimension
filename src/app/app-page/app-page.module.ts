import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { HomeComponent } from './home/home.component';
import { CartasComponent } from './cartas/cartas.component';

@NgModule({
  declarations: [
    FullComponent,
    CardContainerComponent,
    HomeComponent,
    CartasComponent,
  ],
  imports: [CommonModule],
})
export class AppPageModule {}
