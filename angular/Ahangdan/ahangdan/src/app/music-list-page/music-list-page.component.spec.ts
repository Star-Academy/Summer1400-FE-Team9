import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MusicListPageComponent} from './music-list-page.component';
import {MusicLoaderService} from "../music-loader.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subject} from 'rxjs';
import Music from "../models/MusicModel";
import {ElementRef} from "@angular/core";

class MyParams {
  subscribe(func: any) {
    func();
  }
}

describe('MusicListPageComponent', () => {
  let component: MusicListPageComponent;
  let fixture: ComponentFixture<MusicListPageComponent>;
  let backupMusics: Music[];
  let sendNonJSONRequestURL = "";
  let backupNavigatorClipboardWriteTextObject = navigator.clipboard.writeText;
  let copiedText = "";

  let activatedRoute = {
    // params: new Subject<Params>()
    params: new MyParams()
  };

  let musicService = {
    getAllMusics: () => Promise.resolve([]),
    sendRequest: (url: string, method: any, body: any) => {
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

    backupNavigatorClipboardWriteTextObject = navigator.clipboard.writeText;
    navigator.clipboard.writeText = ((data) => {
      copiedText = data;
      return Promise.resolve();
    });
  });

  afterEach(() => {
    component.musics = backupMusics;
    navigator.clipboard.writeText = backupNavigatorClipboardWriteTextObject;
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

  it("should make favorite", async () => {
    localStorage.setItem("favorites-playlist-id", "1");
    let music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    try {
      await component.makeFavorite(music);
    } finally {
      expect(music.isFavorite).toBeTruthy();
    }

    localStorage.removeItem("favorites-playlist-id");
    music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    try {
      await component.makeFavorite(music);
    } finally {
      expect(music.isFavorite).toBeTruthy();
    }
  })

  it("should remove favorite status", async () => {
    localStorage.setItem("favorites-playlist-id", "1");
    let music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    try {
      await component.removeFavoriteStatus(music);
    } finally {
      expect(music.isFavorite).toBeFalsy();
    }

    localStorage.removeItem("favorites-playlist-id");
    music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    try {
      await component.removeFavoriteStatus(music);
    } finally {
      expect(music.isFavorite).toBeFalsy();
    }
  })

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

  it("should share link", async () => {
    let music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    component.shareLinkTo(music);
    expect(copiedText).toEqual("https://star-academy.github.io/Summer1400-FE-Team9/music.html?id=1");
  });

  it("should toggle favorite status", async () => {
    let music = new Music({
      id: 1,
      name: "1",
      artist: "1",
      lyrics: "1",
      cover: "1",
      file: "1",
      isFavorite: false
    });
    try {
      await component.toggleFavoriteStatus(music);
    } finally {
      expect(music.isFavorite).toBeTruthy();
    }

    try {
      await component.toggleFavoriteStatus(music);
    } finally {
      expect(music.isFavorite).toBeFalsy();
    }
  });

  it("should make overlay hidden", () => {
    let tag1 = document.createElement("div");
    let tag2 = document.createElement("div");
    let tag3 = document.createElement("div");
    component.musicDetailsElement = new ElementRef<any>("div");
    component.musicListElement = new ElementRef<any>("div");
    component.musicDetailsElement.nativeElement = tag1;
    let event = {target: tag1};
    component.makeOverlayHidden(event);
    expect(component.isOverlayOpen).toBeTruthy();
    component.isOverlayOpen = false;
    component.musicListElement.nativeElement = tag2;
    event = {target: tag2};
    component.makeOverlayHidden(event);
    expect(component.isOverlayOpen).toBeTruthy();

    component.isOverlayOpen = false;
    event = {target: tag3};
    component.makeOverlayHidden(event);
    expect(component.isOverlayOpen).toBeFalsy();
  })
});
