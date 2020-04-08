import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDashComponent } from './dev-dash.component';

describe('DevDashComponent', () => {
  let component: DevDashComponent;
  let fixture: ComponentFixture<DevDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
