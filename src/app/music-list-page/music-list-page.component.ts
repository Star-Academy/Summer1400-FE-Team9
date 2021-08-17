import { Component, OnInit } from '@angular/core';
import {MusicLoaderService} from "../music-loader.service";
import {faHeart, faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
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

  constructor(private musicLoaderService: MusicLoaderService) { }

  async ngOnInit() {
    this.musics = await this.musicLoaderService.getAllMusics();
  }

}
