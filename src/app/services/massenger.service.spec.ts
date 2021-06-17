import { TestBed } from '@angular/core/testing';

import { MassengerService } from './massenger.service';

describe('MassengerService', () => {
  let service: MassengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
