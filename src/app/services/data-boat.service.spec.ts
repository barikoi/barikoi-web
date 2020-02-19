import { TestBed } from '@angular/core/testing';

import { DataBoatService } from './data-boat.service';

describe('DataBoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataBoatService = TestBed.get(DataBoatService);
    expect(service).toBeTruthy();
  });
});
