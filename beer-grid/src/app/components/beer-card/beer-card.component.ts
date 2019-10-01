import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.scss']
})
export class BeerCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() beer: Object;
}
