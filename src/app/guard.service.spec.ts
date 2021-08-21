import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';

describe('GuardService', () => {
  let service: GuardService;

  beforeEach(() => {
    service = new GuardService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should work correctly", () => {
    localStorage.setItem("is-logged-in", "true");
    expect(service.canActivate()).toBeTruthy();
    localStorage.setItem("is-logged-in", "false");
    expect(service.canActivate()).toBeFalsy();
  })
});
