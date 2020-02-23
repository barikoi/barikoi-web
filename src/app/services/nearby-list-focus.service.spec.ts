import { TestBed } from '@angular/core/testing';

import { NearbyListFocusService } from './nearby-list-focus.service';

describe('NearbyListFocusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NearbyListFocusService = TestBed.get(NearbyListFocusService);
    expect(service).toBeTruthy();
  });
});
