import { TestBed } from '@angular/core/testing';

import { TrueOrFalseService } from './true-or-false.service';

describe('TrueOrFalseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrueOrFalseService = TestBed.get(TrueOrFalseService);
    expect(service).toBeTruthy();
  });
});
