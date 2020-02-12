import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RupantorIntroComponent } from './rupantor-intro.component';

describe('RupantorIntroComponent', () => {
  let component: RupantorIntroComponent;
  let fixture: ComponentFixture<RupantorIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RupantorIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RupantorIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
