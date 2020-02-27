import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanEngineComponent } from './urban-engine.component';

describe('UrbanEngineComponent', () => {
  let component: UrbanEngineComponent;
  let fixture: ComponentFixture<UrbanEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
