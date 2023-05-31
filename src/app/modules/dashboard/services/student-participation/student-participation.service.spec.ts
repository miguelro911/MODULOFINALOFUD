import { TestBed } from '@angular/core/testing';

import { StudentParticipationService } from './student-participation.service';

describe('StudentParticipationService', () => {
  let service: StudentParticipationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentParticipationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
