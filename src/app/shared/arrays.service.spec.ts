import { TestBed } from '@angular/core/testing';

import { ArraysService } from './arrays.service';

describe('ArraysService', () => {
  let service: ArraysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
