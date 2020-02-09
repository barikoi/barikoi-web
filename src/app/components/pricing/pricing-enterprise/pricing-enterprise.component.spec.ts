import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingEnterpriseComponent } from './pricing-enterprise.component';

describe('PricingEnterpriseComponent', () => {
  let component: PricingEnterpriseComponent;
  let fixture: ComponentFixture<PricingEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
