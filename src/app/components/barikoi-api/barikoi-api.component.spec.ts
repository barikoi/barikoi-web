import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarikoiApiComponent } from './barikoi-api.component';

describe('BarikoiApiComponent', () => {
  let component: BarikoiApiComponent;
  let fixture: ComponentFixture<BarikoiApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarikoiApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarikoiApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
