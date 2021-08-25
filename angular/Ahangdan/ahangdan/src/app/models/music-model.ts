export default class Music {
  id: number;
  name: string;
  artist: string;
  lyrics: string;
  cover: string;
  file: string;
  isFavorite: boolean;


  constructor(json: any) {
    this.id = json.id;
    this.name = json.name;
    this.artist = json.artist;
    this.lyrics = json.lyrics;
    this.cover = json.cover;
    this.file = json.file;
    this.isFavorite = json.isFavorite;
  }

  static default() {
    return new Music({
      id: 0,
      name: "",
      artist: "",
      lyrics: "",
      cover: "",
      file: "",
      isFavorite: false
    });
  }
}
