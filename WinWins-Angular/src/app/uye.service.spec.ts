import { TestBed } from '@angular/core/testing';

import { UyeService } from './uye.service';

describe('UyeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UyeService = TestBed.get(UyeService);
    expect(service).toBeTruthy();
  });
});
