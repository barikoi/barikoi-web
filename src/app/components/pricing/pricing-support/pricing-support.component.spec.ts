import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSupportComponent } from './pricing-support.component';

describe('PricingSupportComponent', () => {
  let component: PricingSupportComponent;
  let fixture: ComponentFixture<PricingSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
