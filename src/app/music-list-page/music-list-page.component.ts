import {Component, OnInit} from '@angular/core';
import {MusicLoaderService} from "../music-loader.service";
import {faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';
import Music from "../models/MusicModel";

@Component({
  selector: 'app-music-list-page',
  templateUrl: './music-list-page.component.html',
  styleUrls: ['../music-list-page.component.scss', '../music-page.component.scss']
})
export class MusicListPageComponent implements OnInit {

  musics: Music[] = [];
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  faShareAlt = faShareAlt;
  isProgressIndicatorHidden: boolean = true;
  searchPredicate: string = "";

  constructor(private musicLoaderService: MusicLoaderService) {
  }

  getMusicsToRender(): Music[] {
    if (this.searchPredicate == "") return this.musics;
    return this.musics.filter((music: Music) =>
      music.name.toLowerCase().includes(this.searchPredicate.toLowerCase()) ||
      music.artist.toLowerCase().includes(this.searchPredicate.toLowerCase()));
  }

  async ngOnInit() {
    this.isProgressIndicatorHidden = false;
    this.musics = await this.musicLoaderService.getAllMusics();
    this.isProgressIndicatorHidden = true;
  }

  shareLinkTo(music: Music) {
    let link = "https://star-academy.github.io/Summer1400-FE-Team9/music.html?id=" + music.id;
    navigator.clipboard.writeText(link).then(function () {
      alert('لینک آهنگ در حافظه Clipboard کپی شد' + "؛ " + 'می‌توانید این لینک را در مکان دل‌‌خواه paste کرده و به دوستان خود ارسال کنید.');
    }, function () {
      alert('خطا' + "؛ " + 'دسترسی کپی به مرورگر داده نشده است. لطفا مجددا تلاش نمایید.');
    });
  }

  async removeFavoriteStatus(music: Music) {
    await MusicLoaderService.sendNonJSONRequest("https://songs.code-star.ir/playlist/remove-song",
      'POST',
      {
        token: localStorage.getItem("token"),
        playlistId: parseInt(localStorage.getItem("favorites-playlist-id") ?? "0"),
        songId: music.id,
      });
    music.isFavorite = false;

  }

  async makeFavorite(music: Music) {
    await MusicLoaderService.sendNonJSONRequest("https://songs.code-star.ir/playlist/add-song",
      'POST',
      {
        token: localStorage.getItem("token"),
        playlistId: parseInt(localStorage.getItem("favorites-playlist-id") ?? "0"),
        songId: music.id,
      });
    music.isFavorite = true;
  }

  async toggleFavoriteStatus(music: Music) {
    this.isProgressIndicatorHidden = false;
    if (music.isFavorite) await this.removeFavoriteStatus(music);
    else await this.makeFavorite(music);
    this.isProgressIndicatorHidden = true;
  }
}
