import { TestBed } from '@angular/core/testing';

import { MusicLoaderService } from './music-loader.service';

describe('MusicLoaderService', () => {
  let service: MusicLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
