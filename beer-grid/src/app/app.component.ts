import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service.js';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Beer } from './beer.model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'beer-grid';
  venue = 'Other Half Brewing';
  beers$: Observable<Beer[]>;
  beers: Beer[];

  constructor(
    private beer: BeerService
  ) {
    this.beers$ = beer.entities$;
  }

  ngOnInit() {
    this.beer.getAll();
    this.beers$
      .pipe(
        take(2),
        tap(b => this.beers = b)
      )
      .subscribe();
  }

}

