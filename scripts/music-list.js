// MARK: Fields and variables

let musics = [];
let playlists = [];

// let musics = [
//     {
//         name: "عنوان آهنگ ۱",
//         artist: "خواننده آهنگ ۱",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۲",
//         artist: "خواننده آهنگ ۲",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۳",
//         artist: "خواننده آهنگ ۳",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۴",
//         artist: "خواننده آهنگ ۴",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۵",
//         artist: "خواننده آهنگ ۵",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۶",
//         artist: "خواننده آهنگ ۶",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     },
//     {
//         name: "عنوان آهنگ ۷",
//         artist: "خواننده آهنگ ۷",
//         cover: "images/music-art.png",
//         file: "assets/audios/music.mp3",
//         lyrics: ""
//     }
// ];

// MARK: UI Functions

function setWidthOfSearch(width) {
    let searchBox = document.getElementById("search");
    searchBox.style.width = width + "%";
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
    img.setAttribute("src", music.cover);
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
    musicTitleSpan.innerHTML = music.name;
    return musicTitleSpan;
}

function renderMusicSinger(music) {
    let musicSingerSpan = document.createElement("span");
    musicSingerSpan.setAttribute("class", "music-singer");
    musicSingerSpan.innerHTML = music.artist;
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

function renderMusic(ul, music) {
    ul.appendChild(renderListItem(music));
}

function renderMusicList(musics, predicate = "", onlyShowFavorites = false) {
    let favoriteMusics = null;
    if (playlists != null && playlists !== []) {
        playlists.forEach((playlist) => {
            if (playlist.name === "favorites") favoriteMusics = playlist.songs;
        })
    }
    let ul = document.getElementsByClassName("music-list")[0];
    ul.innerHTML = "";
    let selectedMusics = musics;
    if (favoriteMusics != null && onlyShowFavorites) {
        selectedMusics.songs = selectedMusics.songs.filter((music) => favoriteMusics.includes(music));
    }
    if (predicate == null || predicate === "") {
        selectedMusics.songs
            .forEach((music) => renderMusic(ul, music));
    } else {
        selectedMusics.songs
            .filter((music) => music.name.toLowerCase().includes(predicate.toLowerCase())
                || music.artist.toLowerCase().includes(predicate.toLowerCase()))
            .forEach((music) => renderMusic(ul, music));
    }
}

async function loadAllPlaylists() {
    let response = await fetch('http://130.185.120.192:5000/playlist/all', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: localStorage.getItem("token") })
    });
    if (response.ok) playlists = await response.json();
    else console.log("Server error");
}

async function loadAllMusics() {
    let response = await fetch('http://130.185.120.192:5000/song/all');
    if (response.ok) {
        musics = await response.json();
        await loadAllPlaylists();
        renderMusicList(musics, searchBox.value, );
    } else {
        console.log("Server error");
    }
}

let searchBox = document.getElementById("search-input");
searchBox.oninput = () => renderMusicList(musics, searchBox.value, );

loadAllMusics();