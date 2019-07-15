import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayercompComponent } from './payercomp.component';

describe('PayercompComponent', () => {
  let component: PayercompComponent;
  let fixture: ComponentFixture<PayercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
