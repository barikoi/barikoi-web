import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupantorImpactComponent } from './rupantor-impact.component';

describe('RupantorImpactComponent', () => {
  let component: RupantorImpactComponent;
  let fixture: ComponentFixture<RupantorImpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupantorImpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupantorImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
