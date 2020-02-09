import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiDeveloperComponent } from './bkoi-developer.component';

describe('BkoiDeveloperComponent', () => {
  let component: BkoiDeveloperComponent;
  let fixture: ComponentFixture<BkoiDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
