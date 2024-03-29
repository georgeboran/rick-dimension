import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: [ './form-search.component.scss' ],
} )
export class FormSearchComponent implements OnInit
{
  constructor ( private router: Router ) { }

  ngOnInit (): void { }

  onSearch ( value: string )
  {
    if ( value && value.length > 2 )
    {
      this.router.navigate( [ `/cartas` ], { queryParams: { q: value } } );
    } else if ( value.length < 1 )
    {
      this.router.navigate( [ `/cartas` ], {
        queryParams: { q: '' }
      } );

    };
  }




}
