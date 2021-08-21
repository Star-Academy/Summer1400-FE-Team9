import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicListPageComponent} from './music-list-page.component';
import {MusicLoaderService} from "../music-loader.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject} from 'rxjs';
import Music from "../models/MusicModel";

describe('MusicListPageComponent', () => {
  let component: MusicListPageComponent;
  let fixture: ComponentFixture<MusicListPageComponent>;
  let backupMusics: Music[];
  let sendNonJSONRequestURL = "";

  let activatedRoute = {
    params: new Subject<Params>()
  };

  let musicService = {
    getAllMusics: () => Promise.resolve([]),
    sendNonJSONRequest: (url: string, method: any, body: any) => {
      sendNonJSONRequestURL = url;
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicListPageComponent],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: MusicLoaderService, useValue: musicService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    backupMusics = component.musics;
    component.musics = [new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    }), new Music({
      id: 2,
      name: "2",
      artist: "2",
      lyrics: "2",
      cover: "2",
      file: "2",
      isFavorite: true
    })];
  });

  afterEach(() => {
    component.musics = backupMusics;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get correct musics to render", () => {
    component.searchPredicate = "";
    component.onlyShowFavorites = true;
    expect(component.getMusicsToRender().length).toEqual(1);
    component.onlyShowFavorites = false;
    expect(component.getMusicsToRender().length).toEqual(2);
    component.searchPredicate = "1";
    expect(component.getMusicsToRender().length).toEqual(1);
    component.onlyShowFavorites = true;
    expect(component.getMusicsToRender().length).toEqual(0);
  })

  // it("should remove favorite status", async () => {
  //   let music = new Music({
  //     id: 1,
  //     name: "1",
  //     artist: "1",
  //     lyrics: "1",
  //     cover: "1",
  //     file: "1",
  //     isFavorite: false
  //   });
  //   try {
  //     await component.makeFavorite(music);
  //   } finally {
  //     expect(music.isFavorite).toBeFalsy();
  //   }
  // })

  it("should open music", () => {
    let music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    let element = document.createElement("div");
    component.allMusicsElement.nativeElement = element;
    component.openMusic(music);
    expect(element.style.opacity).toEqual("0.2");
    expect(component.isOverlayOpen).toBeTruthy();
    expect(component.openedMusic.id).toEqual(music.id);
  });
});
