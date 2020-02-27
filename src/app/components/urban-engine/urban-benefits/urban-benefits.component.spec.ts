import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanBenefitsComponent } from './urban-benefits.component';

describe('UrbanBenefitsComponent', () => {
  let component: UrbanBenefitsComponent;
  let fixture: ComponentFixture<UrbanBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
