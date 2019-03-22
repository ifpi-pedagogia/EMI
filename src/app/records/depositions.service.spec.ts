import { TestBed } from '@angular/core/testing';

import { DepositionsService } from './depositions.service';

describe('DepositionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepositionsService = TestBed.get(DepositionsService);
    expect(service).toBeTruthy();
  });
});
