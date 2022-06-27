import { TestBed } from '@angular/core/testing';

import { DriverRepoService } from './driver-repo.service';

describe('DriverRepoService', () => {
  let service: DriverRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
