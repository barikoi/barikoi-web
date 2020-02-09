import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplinkComponent } from './applink.component';

describe('ApplinkComponent', () => {
  let component: ApplinkComponent;
  let fixture: ComponentFixture<ApplinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
