import { TestBed } from '@angular/core/testing';

import { CosmoserviceService } from './cosmoservice.service';

describe('CosmoserviceService', () => {
  let service: CosmoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
