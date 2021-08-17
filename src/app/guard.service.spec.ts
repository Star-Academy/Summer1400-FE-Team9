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
});
