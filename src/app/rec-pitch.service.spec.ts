import { TestBed } from '@angular/core/testing';

import { RecPitchService } from './rec-pitch.service';

describe('RecPitchService', () => {
  let service: RecPitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecPitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
