import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNearbyListComponent } from './search-nearby-list.component';

describe('SearchNearbyListComponent', () => {
  let component: SearchNearbyListComponent;
  let fixture: ComponentFixture<SearchNearbyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNearbyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNearbyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
