let music = document.getElementById("music");
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

renderPageItems(musics[0]);

function setPlaybackRate(rate) {
    music.playbackRate = rate;
    if (rate === 2) {
        twoXButton.style.backgroundColor = "#4C956C";
        twoXButton.style.color = "#fff";
    } else {
        twoXButton.style.backgroundColor = "transparent";
        twoXButton.style.color = "#4C956C";
    }
}

function changePlaybackRate() {
    setPlaybackRate(music.playbackRate === 2 ? 1 : 2);
}

document.getElementById("add-to-favorites-button").onclick = () => {
    // TODO: Add to favorites
}