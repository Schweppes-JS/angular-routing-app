import { TestBed } from '@angular/core/testing';

import { UserTravelGuard } from './user-travel.guard';

describe('UserTravelGuard', () => {
  let guard: UserTravelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserTravelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
