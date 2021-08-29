import { TestBed } from '@angular/core/testing';

import { CervejaService } from './cerveja.service';

describe('CervejaService', () => {
  let service: CervejaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CervejaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
