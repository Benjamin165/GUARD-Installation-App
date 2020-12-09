import { TestBed } from '@angular/core/testing';

import { CurrentdeviceService } from './currentdevice.service';

describe('CurrentdeviceService', () => {
  let service: CurrentdeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentdeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
