import { TestBed } from '@angular/core/testing';

import { MusicLoaderService } from './music-loader.service';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

describe('MusicLoaderService', () => {
  let service: MusicLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MusicLoaderService]});
    service = TestBed.inject(MusicLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
