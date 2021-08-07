let music = {};

let playlists = [];
let favoriteMusics = null;
let favoriteMusicsPlayListID = 0;

const musicHTML = document.getElementById("music");
const twoXButton = document.getElementById("two-x-button");

const titleTag = document.getElementById("title");
const musicCoverImage = document.getElementById("music-cover-image");
const musicTitleText = document.getElementById("music-title-text");
const musicSingerText = document.getElementById("music-singer-text");
const lyricsText = document.getElementById("lyrics-text");
const audioTag = document.getElementById("music");
const addToFavoritesI = document.getElementById("add-to-favorites-i");

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
    if (playlists != null && playlists !== []) {
        playlists.forEach((playlist) => {
            if (playlist.name === "favorites") {
                favoriteMusicsPlayListID = playlist.id;
                favoriteMusics = playlist.songs;
            }
        })
    }
}

async function loadAllPlaylists() {
    let response = await fetch('http://130.185.120.192:5000/playlist/all', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: localStorage.getItem("token")})
    });
    if (response.ok) {
        playlists = await response.json();
        populateFavoritesList();
    } else {
        console.log("Server error");
    }
}

async function loadMusic() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    let response = await fetch('http://130.185.120.192:5000/song/one/' + id);
    if (response.ok) {
        music = await response.json();
        await loadAllPlaylists();
        renderPageItems(music.song);
    } else {
        console.log("Server error");
    }
}

function setPlaybackRate(rate) {
    musicHTML.playbackRate = rate;
    if (rate === 2) {
        twoXButton.style.backgroundColor = "#4C956C";
        twoXButton.style.color = "#fff";
    } else {
        twoXButton.style.backgroundColor = "transparent";
        twoXButton.style.color = "#4C956C";
    }
}

function changePlaybackRate() {
    setPlaybackRate(musicHTML.playbackRate === 2 ? 1 : 2);
}

document.getElementById("add-to-favorites-button").onclick = () => {
    // TODO: Add to favorites
}

loadMusic();