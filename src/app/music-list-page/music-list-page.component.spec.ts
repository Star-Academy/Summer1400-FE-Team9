import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListPageComponent } from './music-list-page.component';
import { MusicLoaderService } from "../music-loader.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Subject } from 'rxjs';

describe('MusicListPageComponent', () => {
  let component: MusicListPageComponent;
  let fixture: ComponentFixture<MusicListPageComponent>;

  let activatedRoute = {
    params: new Subject<Params>()
  };

  let musicService = {
    getAllMusics: () => Promise.resolve([])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicListPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: MusicLoaderService, useValue: musicService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
