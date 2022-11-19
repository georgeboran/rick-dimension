import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.interface';
import { CardsService } from 'src/app/shared/services/cards.service';
import { take, filter } from 'rxjs/operators';
import
{
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router,
} from '@angular/router';

import { DOCUMENT } from '@angular/common';
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
  private showScrollHeight = 2000;
  showGoUpButton: boolean = true;

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

  @HostListener( 'window:scroll', [] )
  onWindowScroll (): void
  {
    const yOffSet = window.pageYOffset;
    if ( ( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) > this.showScrollHeight )
    {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton && ( yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop ) > this.hideScrollHeight )
    {
      this.showGoUpButton = false;
    };
  }

  onScrollDown (): void
  {
    console.log( 'Params -> ', this.pageNum );
    if ( this.info.next )
    {
      this.pageNum++;
      this.getDataFromService();
    }
  }

  scrollTop ()
  {
    window.scrollTo( 0, 1000 );
  }

  retornarString ( objeto: Object )
  {
    const firstValue = Object.values( objeto )[ 0 ]; // 👉️ '1'
    return firstValue;
  }



  private onUrlChanged (): void
  {
    this.router.events
      .pipe( filter( ( events ) => events instanceof NavigationEnd ) )
      .subscribe( () =>
      {
        this.cards = [];
        this.getCardsByQuery();
      } );
  }


  private getCardsByQuery (): void
  {
    this.route.queryParams.pipe( take( 1 ) ).subscribe( ( params: ParamMap | any ) =>
    {
      console.log( 'Params -> ', params );
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
        } else
        {
          this.cards = [];
        }
      } );
  }
}
