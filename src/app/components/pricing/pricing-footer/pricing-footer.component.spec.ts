import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingFooterComponent } from './pricing-footer.component';

describe('PricingFooterComponent', () => {
  let component: PricingFooterComponent;
  let fixture: ComponentFixture<PricingFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
