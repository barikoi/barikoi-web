import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNearbyPtypesComponent } from './search-nearby-ptypes.component';

describe('SearchNearbyPtypesComponent', () => {
  let component: SearchNearbyPtypesComponent;
  let fixture: ComponentFixture<SearchNearbyPtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNearbyPtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNearbyPtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
