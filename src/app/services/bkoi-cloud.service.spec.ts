import { TestBed } from '@angular/core/testing';

import { BkoiCloudService } from './bkoi-cloud.service';

describe('BkoiCloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BkoiCloudService = TestBed.get(BkoiCloudService);
    expect(service).toBeTruthy();
  });
});
