import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Card } from 'src/app/shared/card.interface';
import { CardsService } from 'src/app/shared/services/cards.service';
import { Location } from '@angular/common';
@Component( {
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: [ './card-details.component.scss' ]
} )
export class CardDetailsComponent implements OnInit
{

  card$: Observable<Card> | any;
  constructor ( private route: ActivatedRoute, private cardService: CardsService, private location: Location ) { }

  ngOnInit (): void
  {
    this.route.params.pipe( take( 1 ) ).subscribe( params =>
    {
      const id = params[ 'id' ];
      this.card$ = this.cardService.getDetails( id );
    } )
  }

  onBack ()
  {
    this.location.back();
  }

}
