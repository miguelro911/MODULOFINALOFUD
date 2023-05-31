import { TestBed } from '@angular/core/testing';

import { TheaterPlayService } from './theater-play.service';

describe('TheaterPlayService', () => {
  let service: TheaterPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaterPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
