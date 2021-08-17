import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListPageComponent } from './music-list-page.component';
import {MusicLoaderService} from "../music-loader.service";
import {ActivatedRoute} from "@angular/router";

describe('MusicListPageComponent', () => {
  let component: MusicListPageComponent;
  let fixture: ComponentFixture<MusicListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicListPageComponent ],
      providers: [MusicLoaderService, ActivatedRoute]
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
