let music = {};

let musicHTML = document.getElementById("music");
let twoXButton = document.getElementById("two-x-button");

let titleTag = document.getElementById("title");
let musicCoverImage = document.getElementById("music-cover-image");
let musicTitleText = document.getElementById("music-title-text");
let musicSingerText = document.getElementById("music-singer-text");
let sourceTag = document.getElementById("music-playback-source");
let lyricsText = document.getElementById("lyrics-text");

function renderPageItems(music) {
    titleTag.innerHTML = music.name;
    musicCoverImage.setAttribute("src", music.cover); // TODO: Better placeholder...
    musicTitleText.innerHTML = music.name;
    musicSingerText.innerHTML = music.artist;
    sourceTag.setAttribute("src", music.file);
    lyricsText.innerHTML = music.lyrics.replace(/\n/g, '<br>');
}

async function loadMusic() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    let response = await fetch('http://130.185.120.192:5000/song/one/' + id);
    if (response.ok) {
        music = await response.json();
        renderPageItems(music);
    } else {
        console.log("Server error");
    }
}

renderPageItems(musics[0]);

// loadMusic();

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