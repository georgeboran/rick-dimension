import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component( {
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: [ './card-container.component.scss' ],
} )
export class CardContainerComponent implements OnInit
{
  constructor ( private router: Router ) { }

  ngOnInit () { }
  home ()
  {
    this.router.navigateByUrl( '/home' );
  }

}
