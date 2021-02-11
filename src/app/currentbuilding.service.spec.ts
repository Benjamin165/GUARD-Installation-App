import { TestBed } from '@angular/core/testing';

import { CurrentbuildingService } from './currentbuilding.service';

describe('CurrentbuildingService', () => {
  let service: CurrentbuildingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentbuildingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
