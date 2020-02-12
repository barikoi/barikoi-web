import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupantorComponent } from './rupantor.component';

describe('RupantorComponent', () => {
  let component: RupantorComponent;
  let fixture: ComponentFixture<RupantorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupantorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
