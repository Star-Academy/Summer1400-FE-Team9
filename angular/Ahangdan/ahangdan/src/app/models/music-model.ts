export default class Music {
  id = 0;
  name = "";
  artist = "";
  lyrics = "";
  cover = "";
  file = "";
  isFavorite = false;

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
