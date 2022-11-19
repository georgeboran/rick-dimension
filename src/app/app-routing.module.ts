import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasComponent } from './app-page/cartas/cartas.component';
import { FullComponent } from './app-page/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    pathMatch: 'full',
  },
  {
    path: 'full',
    component: FullComponent,
  },
  {
    path: 'cartas',
    component: CartasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
