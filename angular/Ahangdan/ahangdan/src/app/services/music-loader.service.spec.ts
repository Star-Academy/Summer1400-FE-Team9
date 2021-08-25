import { TestBed } from '@angular/core/testing';

import { MusicLoaderService } from './music-loader.service';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import Music from "../models/music-model";
import {HttpClient} from "@angular/common/http";

class HTTPMusicLoaderPromiseHelper {
  url = "";
  body?: object;

  constructor(url: string, body?: object) {
    this.url = url;
    this.body = body;
  }

  toPromise(): Promise<any> {
    switch (this.url) {
      case "https://songs.code-star.ir/song/all": return Promise.resolve({songs: [new Music({
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
      })]});
      case "https://songs.code-star.ir/playlist/all": return Promise.resolve([
        { name: "someOtherPlaylist",
          id: 1,
          songs: [
            {
              id: 3,
              name: "2",
              artist: "2",
              lyrics: "2",
              cover: "2",
              file: "2",
              isFavorite: true
            }
          ]},
        { name: "favorites",
          id: 0,
          songs: [
            {
              id: 2,
              name: "2",
              artist: "2",
              lyrics: "2",
              cover: "2",
              file: "2",
              isFavorite: true
            }
          ]},
      ]);
      default: return Promise.resolve("error");
    }
  }
}

describe('MusicLoaderService', () => {
  let service: MusicLoaderService;

  let http = {
    post: (url: string, body?: object) => {
      return new HTTPMusicLoaderPromiseHelper(url);
    },
    get: (url: string) => {
      return new HTTPMusicLoaderPromiseHelper(url);
    }
  }

  let http2 = {
    post: (url: string, body?: object) => {
      switch (url) {
        case "https://songs.code-star.ir/song/all": return Promise.resolve(JSON.stringify([new Music({
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
        })]));
        case "https://songs.code-star.ir/playlist/all": return Promise.resolve(JSON.stringify([
          { name: "favorites",
          id: 0,
          songs: [
            {
              id: 2,
              name: "2",
              artist: "2",
              lyrics: "2",
              cover: "2",
              file: "2",
              isFavorite: true
            }
          ]}
        ]));
        default: return Promise.resolve("error");
      }
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MusicLoaderService, {provide: HttpClient, useValue: http},]});
    service = TestBed.inject(MusicLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get all musics", async () => {
    let musics = await service.getAllMusics();
    expect(musics.length).toEqual(2);
  });
});
