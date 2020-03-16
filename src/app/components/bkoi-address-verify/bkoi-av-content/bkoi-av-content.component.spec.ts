import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiAvContentComponent } from './bkoi-av-content.component';

describe('BkoiAvContentComponent', () => {
  let component: BkoiAvContentComponent;
  let fixture: ComponentFixture<BkoiAvContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiAvContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiAvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
