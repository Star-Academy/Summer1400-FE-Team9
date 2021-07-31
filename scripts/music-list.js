// MARK: Fields and variables

let musics = [
    {
        title: "عنوان آهنگ ۱",
        singer: "خواننده آهنگ ۱",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۲",
        singer: "خواننده آهنگ ۲",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۳",
        singer: "خواننده آهنگ ۳",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۴",
        singer: "خواننده آهنگ ۴",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۵",
        singer: "خواننده آهنگ ۵",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۶",
        singer: "خواننده آهنگ ۶",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۷",
        singer: "خواننده آهنگ ۷",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    }
]

let audios = musics.map((music) => new Audio(music.audioURL));

// MARK: UI Functions

function setWidthOfSearch(width){
    let searchBox = document.getElementById("search");
    searchBox.style.width=width+"%";
    if (width === 40) {
        searchBox.style.borderRadius = "999rem";
    } else {
        searchBox.style.borderRadius = "0";
    }
}

// MARK: Main functions

function renderImage(music) {
    let img = document.createElement("img");
    img.setAttribute("height", "60");
    img.setAttribute("width", "60");
    img.setAttribute("src", music.imageURL);
    img.setAttribute("alt", "عکس موزیک");
    return img;
}

function renderPlayIcon() {
    let playI = document.createElement("i");
    playI.setAttribute("class", "fa fa-play");
    playI.setAttribute("aria-hidden", "true");
    return playI;
}

function renderFavoriteIcon() {
    let addToFavoritesI = document.createElement("i");
    addToFavoritesI.setAttribute("class", "fa fa-heart-o");
    addToFavoritesI.setAttribute("aria-hidden", "true");
    return addToFavoritesI;
}

function renderLinkToMusicPage() {
    let a = document.createElement("a");
    a.setAttribute("href", "music.html");
    a.appendChild(renderPlayIcon());
    return a;
}

function renderFavoriteButton() {
    let button = document.createElement("button");
    button.appendChild(renderFavoriteIcon());
    return button;
}

function renderMusicCellControls() {
    let musicCellControlsSpan = document.createElement("span");
    musicCellControlsSpan.setAttribute("class", "music-cell-controls");
    return musicCellControlsSpan;
}

function renderMusicControls() {
    let musicCellControlsSpan = renderMusicCellControls();
    let a = renderLinkToMusicPage();
    let button = renderFavoriteButton();
    musicCellControlsSpan.appendChild(a);
    musicCellControlsSpan.appendChild(button);
    return musicCellControlsSpan;
}

function renderTitleAndSingerLink(musicTitleAndSingerSpan) {
    let musicTitleAndSingerLink = document.createElement("a");
    musicTitleAndSingerLink.setAttribute("href", "music.html");
    musicTitleAndSingerLink.setAttribute("class", "music-title-and-singer-link");
    musicTitleAndSingerLink.appendChild(musicTitleAndSingerSpan)
    return musicTitleAndSingerLink;
}

function renderMusicTitle(music) {
    let musicTitleSpan = document.createElement("span");
    musicTitleSpan.setAttribute("class", "music-title");
    musicTitleSpan.innerHTML = music.title;
    return musicTitleSpan;
}

function renderMusicSinger(music) {
    let musicSingerSpan = document.createElement("span");
    musicSingerSpan.setAttribute("class", "music-singer");
    musicSingerSpan.innerHTML = music.singer;
    return musicSingerSpan;
}

function renderMusicCellHeader() {
    let span = document.createElement("span");
    span.setAttribute("class", "music-cell-header");
    return span;
}

function renderMusicTitleAndSingerSpan() {
    let musicTitleAndSingerSpan = document.createElement("span");
    musicTitleAndSingerSpan.setAttribute("class", "music-title-and-singer");
    return musicTitleAndSingerSpan;
}

function renderMusicTitleAndSinger(music) {
    let musicTitleAndSingerSpan = renderMusicTitleAndSingerSpan();
    let musicTitleSpan = renderMusicTitle(music);
    let musicSingerSpan = renderMusicSinger(music);
    musicTitleAndSingerSpan.appendChild(musicTitleSpan);
    musicTitleAndSingerSpan.appendChild(musicSingerSpan);
    return musicTitleAndSingerSpan;
}

function renderMainListItemSpan(music) {
    let span = renderMusicCellHeader();
    let img = renderImage(music);
    span.appendChild(img);
    span.appendChild(renderTitleAndSingerLink(renderMusicTitleAndSinger(music)));
    return span;
}

function renderListItem(music) {
    let li = document.createElement("li");
    let span = renderMainListItemSpan(music);
    li.appendChild(span);
    li.appendChild(renderMusicControls());
    return li;
}

function renderMusic(music) {
    let ul = document.getElementsByClassName("music-list")[0];
    let li = renderListItem(music);
    ul.appendChild(li);
}

function renderMusicList(musics) {
    musics.forEach((music) => renderMusic(music));
}

renderMusicList(musics);