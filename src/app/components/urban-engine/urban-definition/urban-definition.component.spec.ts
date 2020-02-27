import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanDefinitionComponent } from './urban-definition.component';

describe('UrbanDefinitionComponent', () => {
  let component: UrbanDefinitionComponent;
  let fixture: ComponentFixture<UrbanDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrbanDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
