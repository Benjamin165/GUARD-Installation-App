import { TestBed } from '@angular/core/testing';

import { BeepService } from './beep.service';

describe('BeepService', () => {
  let service: BeepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
