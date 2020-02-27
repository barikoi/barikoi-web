import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiApiDefComponent } from './bkoi-api-def.component';

describe('BkoiApiDefComponent', () => {
  let component: BkoiApiDefComponent;
  let fixture: ComponentFixture<BkoiApiDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiApiDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiApiDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
