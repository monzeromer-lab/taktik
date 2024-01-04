import { TestBed } from '@angular/core/testing';

import { BrefService } from './bref.service';

describe('BrefService', () => {
  let service: BrefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
