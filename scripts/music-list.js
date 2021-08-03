// MARK: Fields and variables

let musics = [];
let playlists = [];
let favoriteMusics = null;
let favoriteMusicsPlayListID = 0;

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

function isFavorite(music) {
    let flag = false;
    Array.prototype.forEach.call(favoriteMusics, eachMusic => {
        try {
            if (eachMusic.rest.id === music.id) {
                flag = true;
            }
        } catch {
            if (eachMusic.id === music.id) {
                flag = true;
            }
        }
    });
    return flag;
}

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
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", "عکس موزیک");
    return img;
}

function renderPlayIcon() {
    let playI = document.createElement("i");
    playI.setAttribute("class", "fa fa-play");
    playI.setAttribute("aria-hidden", "true");
    return playI;
}

function renderFavoriteIcon(music) {
    let addToFavoritesI = document.createElement("i");
    if (favoriteMusics != null && isFavorite(music)) {
        addToFavoritesI.setAttribute("class", "fa fa-heart");
    } else {
        addToFavoritesI.setAttribute("class", "fa fa-heart-o");
    }
    addToFavoritesI.setAttribute("aria-hidden", "true");
    return addToFavoritesI;
}

function renderLinkToMusicPage(music) {
    let a = document.createElement("a");
    a.setAttribute("href", "music.html?id=" + music.id);
    a.appendChild(renderPlayIcon());
    return a;
}

function renderFavoriteButton(music) {
    let button = document.createElement("button");
    button.appendChild(renderFavoriteIcon(music));
    button.onclick = () => toggleFavoriteStatus(music);
    return button;
}

function renderMusicCellControls() {
    let musicCellControlsSpan = document.createElement("span");
    musicCellControlsSpan.setAttribute("class", "music-cell-controls");
    return musicCellControlsSpan;
}

function renderMusicControls(music) {
    let musicCellControlsSpan = renderMusicCellControls();
    let a = renderLinkToMusicPage(music);
    let button = renderFavoriteButton(music);
    musicCellControlsSpan.appendChild(a);
    musicCellControlsSpan.appendChild(button);
    return musicCellControlsSpan;
}

function renderTitleAndSingerLink(musicTitleAndSingerSpan, music) {
    let musicTitleAndSingerLink = document.createElement("a");
    musicTitleAndSingerLink.setAttribute("href", "music.html?id=" + music.id);
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
    span.appendChild(renderTitleAndSingerLink(renderMusicTitleAndSinger(music), music));
    return span;
}

function renderListItem(music) {
    let li = document.createElement("li");
    let span = renderMainListItemSpan(music);
    li.appendChild(span);
    li.appendChild(renderMusicControls(music));
    return li;
}

function renderMusic(ul, music) {
    ul.appendChild(renderListItem(music));
}

function populateFavoritesPlaylist() {
    if (playlists != null && playlists !== []) {
        playlists.forEach((playlist) => {
            if (playlist.name === "favorites") {
                playlist.songs = favoriteMusics;
                playlist.id = favoriteMusicsPlayListID;
            }
        })
    }
}

function populateFavoritesList() {
    if (playlists != null && playlists !== []) {
        playlists.forEach((playlist) => {
            if (playlist.name === "favorites") {
                favoriteMusicsPlayListID = playlist.id;
                favoriteMusics = playlist.songs;
            }
        })
    }
}

function populateSelectedMusics(musics, onlyShowFavorites) {
    let selectedMusics = musics;
    if (favoriteMusics != null && onlyShowFavorites) {
        selectedMusics.songs = selectedMusics.songs.filter((music) => isFavorite(music));
    }
    return selectedMusics;
}

function renderMusicList(musics, predicate = "", onlyShowFavorites = false) {
    populateFavoritesList();
    let ul = document.getElementsByClassName("music-list")[0];
    ul.innerHTML = "";
    let selectedMusics = populateSelectedMusics(musics, onlyShowFavorites);
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

function toggleFavoriteStatusForMusicObject(music, includes) {
    if (includes) {
        favoriteMusics = Object.values(favoriteMusics).filter((eachMusic) => {
            try {
                return eachMusic.rest.id !== music.id;
            } catch {
                return eachMusic.id !== music.id;
            }
        });
    } else {
        favoriteMusics.push(music);
    }
    populateFavoritesPlaylist();
    renderMusicList(musics, searchBox.value, pageTitleNameTag.innerHTML === "علاقه‌مندی‌ها");
}

async function toggleFavoriteStatus(music) {
    let includes = isFavorite(music);
    let url = 'http://130.185.120.192:5000/playlist/' + (includes ? 'remove-song' : 'add-song');
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token: localStorage.getItem("token"),
            playlistId: favoriteMusicsPlayListID,
            songId: music.id
        })
    });
    if (response.ok) toggleFavoriteStatusForMusicObject(music, includes);
    else console.log("Server error");
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

let pageTitleNameTag = document.getElementById("page-title-name");

async function loadAllMusics() {
    let response = await fetch('http://130.185.120.192:5000/song/all');
    if (response.ok) {
        musics = await response.json();
        await loadAllPlaylists();
        renderMusicList(musics, searchBox.value, pageTitleNameTag.innerHTML === "علاقه‌مندی‌ها");
    } else {
        console.log("Server error");
    }
}

let searchBox = document.getElementById("search-input");
searchBox.oninput = () => renderMusicList(musics, searchBox.value, pageTitleNameTag.innerHTML === "علاقه‌مندی‌ها");

loadAllMusics();