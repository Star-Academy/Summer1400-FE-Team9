export default class Music {
  id: number;
  name: string;
  artist: string;
  lyrics: string;
  cover: string;
  file: string;


  constructor(music: any) {
    this.id = music.id;
    this.name = music.name;
    this.artist = music.artist;
    this.lyrics = music.lyrics;
    this.cover = music.cover;
    this.file = music.file;
  }
}
