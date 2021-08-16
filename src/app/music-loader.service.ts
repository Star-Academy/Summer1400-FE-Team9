import { Injectable } from '@angular/core';
import Music from "./models/MusicModel";

@Injectable()
export class MusicLoaderService {

  constructor() { }

  public static async sendRequest(url: string, method: string, body?: object): Promise<any> {
    const init: RequestInit = {headers: {'Content-Type': 'application/json'}};
    init.method = method;
    if (body) init.body = JSON.stringify(body);
    return fetch(url, init).then((response) => {
      if (response.ok) return response.json();
      throw response.text();
    })
  }

  async getAllMusics(): Promise<Music[]> {
    const result = await MusicLoaderService.sendRequest("https://songs.code-star.ir/song/all",
      'GET');
    const musics = result.songs;
    return musics.map((music: any) => new Music(music));
  }
}
