import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MusicLoaderService} from "../music-loader.service";
import {faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import {faShareAlt} from '@fortawesome/free-solid-svg-icons';
import Music from "../models/MusicModel";
import {ActivatedRoute} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-music-list-page',
  templateUrl: './music-list-page.component.html',
  styleUrls: ['../music-list-page.component.scss', '../music-page.component.scss'],
  animations: [
    trigger('inOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ]
})
export class MusicListPageComponent implements OnInit {

  @ViewChild('allMusics') allMusicsElement!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('musicList') musicListElement!: ElementRef;
  @ViewChild('musicDetails') musicDetailsElement!: ElementRef;

  musics: Music[] = [];
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  faShareAlt = faShareAlt;
  isProgressIndicatorHidden: boolean = true;
  searchPredicate: string = "";
  onlyShowFavorites: boolean = false;
  openedMusic: Music = Music.default();
  isOverlayOpen: boolean = false;

  constructor(private musicLoaderService: MusicLoaderService, private route: ActivatedRoute) {
  }

  getMusicsToRender(): Music[] {
    if (this.searchPredicate == "") {
      return this.musics.filter((music: Music) => this.onlyShowFavorites ? music.isFavorite : true);
    }
    return this.musics.filter((music: Music) =>
      music.name.toLowerCase().includes(this.searchPredicate.toLowerCase()) ||
      music.artist.toLowerCase().includes(this.searchPredicate.toLowerCase()))
      .filter((music: Music) => this.onlyShowFavorites ? music.isFavorite : true);
  }

  async ngOnInit() {
    this.isProgressIndicatorHidden = false;
    this.musics = await this.musicLoaderService.getAllMusics();
    this.isProgressIndicatorHidden = true;
    this.route.params.subscribe((params) => {this.onlyShowFavorites = params['onlyShowFavorites'] == "favorites";});
  }

  shareLinkTo(music: Music) {
    let link = "https://star-academy.github.io/Summer1400-FE-Team9/music.html?id=" + music.id;
    navigator.clipboard.writeText(link).then(() => alert('لینک آهنگ در حافظه Clipboard کپی شد' + "؛ " + 'می‌توانید این لینک را در مکان دل‌‌خواه paste کرده و به دوستان خود ارسال کنید.'), () => alert('خطا' + "؛ " + 'دسترسی کپی به مرورگر داده نشده است. لطفا مجددا تلاش نمایید.'));
  }

  async removeFavoriteStatus(music: Music) {
    await this.musicLoaderService.sendRequest("https://songs.code-star.ir/playlist/remove-song",
      'POST',
      {
        token: localStorage.getItem("token"),
        playlistId: parseInt(localStorage.getItem("favorites-playlist-id") ?? "0"),
        songId: music.id,
      });
    music.isFavorite = false;
  }

  async makeFavorite(music: Music) {
    await this.musicLoaderService.sendRequest("https://songs.code-star.ir/playlist/add-song",
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

  openMusic(music: Music) {
    this.openedMusic = music;
    // this.overlay.nativeElement.style.visibility = "visible";
    // this.overlay.nativeElement.style.opacity = 1;
    // this.overlay.nativeElement.style.transform = "scale(1) translate(0, -25%);"

    this.allMusicsElement.nativeElement.style.opacity = "20%";
    this.isOverlayOpen = true;
  }

  makeOverlayHidden(event: any) {
    if (event.target == this.musicDetailsElement.nativeElement || event.target == this.musicListElement.nativeElement) {
      this.allMusicsElement.nativeElement.style.opacity = "100%";
      this.isOverlayOpen = true;
    }
  }
}
