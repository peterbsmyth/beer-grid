import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Beer } from './beer.model';

@Injectable({ providedIn: 'root' })
export class BeerService extends EntityCollectionServiceBase<Beer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Beer', factory);
  }
}