import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentssnoticeComponent } from './paymentssnotice.component';

describe('PaymentssnoticeComponent', () => {
  let component: PaymentssnoticeComponent;
  let fixture: ComponentFixture<PaymentssnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentssnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentssnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
