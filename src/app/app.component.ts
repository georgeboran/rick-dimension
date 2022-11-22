import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent
{
  title = 'rick-dimension';
  constructor ( private router: Router )
  {

  }
  getRoute (): string
  {
    return this.router.url;
  }
}
