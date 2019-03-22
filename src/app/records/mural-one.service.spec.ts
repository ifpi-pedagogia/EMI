import { TestBed } from '@angular/core/testing';

import { MuralOneService } from './mural-one.service';

describe('MuralOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuralOneService = TestBed.get(MuralOneService);
    expect(service).toBeTruthy();
  });
});
