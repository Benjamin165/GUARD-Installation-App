import { TestBed } from '@angular/core/testing';

import { CurrentprojectService } from './currentproject.service';

describe('CurrentprojectService', () => {
  let service: CurrentprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
