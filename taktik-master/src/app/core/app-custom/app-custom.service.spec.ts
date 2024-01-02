import { TestBed } from '@angular/core/testing';

import { AppCustomService } from './app-custom.service';

describe('AppCustomService', () => {
  let service: AppCustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppCustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
