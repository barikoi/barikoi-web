import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFreeComponent } from './pricing-free.component';

describe('PricingFreeComponent', () => {
  let component: PricingFreeComponent;
  let fixture: ComponentFixture<PricingFreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingFreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
