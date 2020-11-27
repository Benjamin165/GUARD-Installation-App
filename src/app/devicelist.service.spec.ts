import { TestBed } from '@angular/core/testing';

import { DevicelistService } from './devicelist.service';

describe('DevicelistService', () => {
  let service: DevicelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevicelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
