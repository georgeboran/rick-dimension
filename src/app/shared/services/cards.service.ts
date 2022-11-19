import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card.interface';
import { environment } from 'src/environments/environment';
@Injectable( {
  providedIn: 'root',
} )
export class CardsService
{
  constructor ( private httpClient: HttpClient ) { }

  searchCards ( query = '', page = 1 )
  {
    const filter = `https://rickandmortyapi.com/api/character/?name=${ query }&page=${ page }`;
    return this.httpClient.get<Card[]>( filter );
  }

  getDetails ( id: number )
  {
    return this.httpClient.get<Card>( `https://rickandmortyapi.com/api/character/${ id }` );
  }
}
