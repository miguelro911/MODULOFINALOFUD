import { TestBed } from '@angular/core/testing';

import { CurriculumProjectService } from './curriculum-project.service';

describe('CurriculumProjectService', () => {
  let service: CurriculumProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculumProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
