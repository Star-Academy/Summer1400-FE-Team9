let music = document.getElementById("music");
let twoXButton = document.getElementById("two-x-button");

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