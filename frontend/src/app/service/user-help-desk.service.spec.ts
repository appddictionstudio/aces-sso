import { TestBed } from '@angular/core/testing';

import { UserHelpDeskService } from './user-help-desk.service';

describe('UserHelpDeskService', () => {
  let service: UserHelpDeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHelpDeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
