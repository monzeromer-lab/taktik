import { TestBed } from '@angular/core/testing';

import { AppstyleService } from './appstyle.service';

describe('AppstyleService', () => {
  let service: AppstyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppstyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
