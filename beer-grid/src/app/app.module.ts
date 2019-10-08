import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { entityMetadata } from './entity-metadata';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BeerCardDoneComponent } from './components/beer-card-done/beer-card-done.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    BeerCardDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata
    })
  ],
  providers: [{
    provide: DefaultDataServiceConfig,
    useValue: {
      root: 'http://localhost:3000'
    }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
