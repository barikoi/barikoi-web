import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiAvDefComponent } from './bkoi-av-def.component';

describe('BkoiAvDefComponent', () => {
  let component: BkoiAvDefComponent;
  let fixture: ComponentFixture<BkoiAvDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiAvDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiAvDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
