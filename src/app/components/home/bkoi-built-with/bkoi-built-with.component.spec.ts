import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiBuiltWithComponent } from './bkoi-built-with.component';

describe('BkoiBuiltWithComponent', () => {
  let component: BkoiBuiltWithComponent;
  let fixture: ComponentFixture<BkoiBuiltWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiBuiltWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiBuiltWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
