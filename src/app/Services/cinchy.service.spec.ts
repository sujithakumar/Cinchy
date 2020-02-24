import { TestBed } from '@angular/core/testing';

import { CinchyService } from './cinchy.service';

describe('CinchyService', () => {
  let service: CinchyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinchyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
