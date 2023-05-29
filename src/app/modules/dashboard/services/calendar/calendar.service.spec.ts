import { TestBed } from '@angular/core/testing';

import { CalendarioServiceService } from './calendar.service';

describe('CalendarioServiceService', () => {
  let service: CalendarioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
