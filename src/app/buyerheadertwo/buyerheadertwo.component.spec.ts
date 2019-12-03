import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerheadertwoComponent } from './buyerheadertwo.component';

describe('BuyerheadertwoComponent', () => {
  let component: BuyerheadertwoComponent;
  let fixture: ComponentFixture<BuyerheadertwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerheadertwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerheadertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
