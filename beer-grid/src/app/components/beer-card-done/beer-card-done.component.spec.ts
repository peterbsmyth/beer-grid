import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCardDoneComponent } from './beer-card-done.component';

describe('BeerCardDoneComponent', () => {
  let component: BeerCardDoneComponent;
  let fixture: ComponentFixture<BeerCardDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCardDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
