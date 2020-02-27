import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiApiContentComponent } from './bkoi-api-content.component';

describe('BkoiApiContentComponent', () => {
  let component: BkoiApiContentComponent;
  let fixture: ComponentFixture<BkoiApiContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiApiContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiApiContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
