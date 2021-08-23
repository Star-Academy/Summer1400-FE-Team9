import {Injectable} from '@angular/core';
import Music from "./models/MusicModel";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MusicLoaderService {

  constructor(private http: HttpClient) {
  }

  public async sendRequest(url: string, method: string, body?: object): Promise<any> {
    if (method == 'POST') return this.http.post<any>(url, body, {headers: {'Content-Type': 'application/json'}}).toPromise();
    else return this.http.get<any>(url, {headers: {'Content-Type': 'application/json'}}).toPromise();
  }

  public static async sendNonJSONRequest(url: string, method: string, body?: object): Promise<any> {
    const init: RequestInit = {headers: {'Content-Type': 'application/json'}};
    init.method = method;
    if (body) init.body = JSON.stringify(body);
    return fetch(url, init).then((response) => {
      if (response.ok) return response.text();
      throw response.text();
    })
  }

  async getAllMusics(): Promise<Music[]> {
    const result = await this.sendRequest("https://songs.code-star.ir/song/all", 'GET');
    const musics = result.songs;
    const playlistResult = await this.sendRequest("https://songs.code-star.ir/playlist/all",
      'POST',
      {token: localStorage.getItem("token")});
    let finalMusics = musics.map((music: any) => new Music(music));
    console.log(playlistResult);
    for (const eachMusic of finalMusics) eachMusic.isFavorite = false;
    for (const playlist of playlistResult) {
      if (playlist.name == "favorites") {
        localStorage.setItem("favorites-playlist-id", playlist.id + "");
        for (const music of playlist.songs) {
          for (const eachMusic of finalMusics) {
            if (eachMusic.id == music.id) eachMusic.isFavorite = true;
          }
        }
        break;
      }
    }
    return finalMusics;
  }
}
