let music = {};

let playlistsInMusicPage = [];
let favoriteMusics = null;
let favoriteMusicsPlayListID = 0;

const musicHTML = document.getElementById("music");
const twoXButton = document.getElementById("two-x-button");

let titleTag = document.getElementById("title");
let musicCoverImage = document.getElementById("music-cover-image");
let musicTitleText = document.getElementById("music-title-text");
let musicSingerText = document.getElementById("music-singer-text");
let lyricsText = document.getElementById("lyrics-text");
let audioTag = document.getElementById("music");
let addToFavoritesI = document.getElementById("add-to-favorites-i");

function isFavorite(music) {
    let flag = false;
    Array.prototype.forEach.call(favoriteMusics, eachMusic => {
        if (eachMusic.rest.id === music.id) {
            flag = true;
        }
    });
    return flag;
}

function addMusicSource(music) {
    let sourceTag = document.createElement("source");
    sourceTag.setAttribute("id", "music-playback-source");
    sourceTag.setAttribute("src", music.file);
    sourceTag.setAttribute("type", "audio/mpeg");
    audioTag.innerHTML = "";
    audioTag.appendChild(sourceTag);
}

function renderPageItems(music) {
    titleTag.innerHTML = music.name;
    musicCoverImage.setAttribute("src", music.cover); // TODO: Better placeholder...
    musicTitleText.innerHTML = music.name;
    musicSingerText.innerHTML = music.artist;
    lyricsText.innerHTML = music.lyrics.replace(/\n/g, '<br>');
    if (favoriteMusics != null) {
        addToFavoritesI.setAttribute("class", isFavorite(music) ? "fa fa-heart" : "fa fa-heart-o");
    }
    addMusicSource(music);
}

function populateFavoritesList() {
    if (playlistsInMusicPage != null && playlistsInMusicPage !== []) {
        playlistsInMusicPage.forEach((playlist) => {
            if (playlist.name === "favorites") {
                favoriteMusicsPlayListID = playlist.id;
                favoriteMusics = playlist.songs;
            }
        })
    }
}

async function loadAllPlaylists() {
    let response = await fetch('https://songs.code-star.ir/playlist/all', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: localStorage.getItem("token")})
    });
    if (response.ok) {
        playlistsInMusicPage = await response.json();
        populateFavoritesList();
    } else {
        console.log("Server error");
    }
}

async function loadMusic() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    let response = await fetch('https://songs.code-star.ir/song/one/' + id);
    if (response.ok) {
        music = await response.json();
        await loadAllPlaylists();
        renderPageItems(music.song);
    } else {
        console.log("Server error");
    }
}

loadMusic();