import { Component } from '@angular/core';
import venueStaticData from "../assets/data/beer-list-rye-house.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beer-grid';
  venue = venueStaticData;
  // beers = beerStaticData;
}

