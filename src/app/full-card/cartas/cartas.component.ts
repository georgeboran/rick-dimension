import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { take, filter } from 'rxjs/operators';
import
{
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Card } from 'src/app/shared/card.interface';
import { CardsService } from 'src/app/shared/services/cards.service';

type RequestInfo = {
  next: string;
};
@Component( {
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: [ './cartas.component.scss' ],
} )

export class CartasComponent implements OnInit
{
  cards: Card[] = [];
  info: RequestInfo = {
    next: '',
  };

  private pageNum = 1;
  private query: string = '';
  private hideScrollHeight = 300;
  private showScrollHeight = 500;
  showGoUpButton: boolean = false;

  constructor (
    @Inject( DOCUMENT ) private document: Document,
    private cardService: CardsService,
    private route: ActivatedRoute,
    private router: Router
  )
  {
    this.onUrlChanged();
  }

  ngOnInit (): void
  {
    this.getCardsByQuery();
  }

  returnQuery ()
  {
    return this.query;
  }

  retornarString ( objeto: Object )
  {
    const firstValue = Object.values( objeto )[ 0 ];
    return firstValue;
  }

  @HostListener( 'window:scroll', [] )
  onWindowScroll (): void
  {
    const yOffSet = window.pageYOffset;
    if ( ( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) > this.showScrollHeight )
    {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton && ( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) < this.hideScrollHeight )
    {
      this.showGoUpButton = false;
    }
  }

  onScrollDown (): void
  {
    if ( this.info.next )
    {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  onScrollTop (): void
  {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Other
  }

  private onUrlChanged (): void
  {
    this.router.events
      .pipe( filter( ( event ) => event instanceof NavigationEnd ) )
      .subscribe( () =>
      {
        this.cards = [];
        this.pageNum = 1;
        this.getCardsByQuery();
      } );
  }

  private getCardsByQuery (): void
  {
    this.route.queryParams.pipe( take( 1 ) ).subscribe( ( params: ParamMap | any ) =>
    {
      this.query = params[ 'q' ];
      this.getDataFromService();
    } );
  }

  private getDataFromService (): void
  {
    this.cardService
      .searchCards( this.query, this.pageNum )
      .pipe( take( 1 ) )
      .subscribe( ( res: any ) =>
      {
        if ( res?.results?.length )
        {
          const { info, results } = res;
          this.cards = [ ...this.cards, ...results ];
          this.info = info;
          window.scrollTo( 0, 0 )
        } else
        {
          this.cards = [];
        }
      } );
  }
}
