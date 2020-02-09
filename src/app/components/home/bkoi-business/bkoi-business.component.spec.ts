import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiBusinessComponent } from './bkoi-business.component';

describe('BkoiBusinessComponent', () => {
  let component: BkoiBusinessComponent;
  let fixture: ComponentFixture<BkoiBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
