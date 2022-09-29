import { TestBed } from '@angular/core/testing';

import { AsToastrService } from './as-toastr.service';

describe('AsToastrService', () => {
  let service: AsToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
