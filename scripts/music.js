let music = document.getElementById("music");
let twoXButton = document.getElementById("two-x-button");

function setPlaybackRate(rate) {
    music.playbackRate = rate;
    twoXButton.style.borderColor = rate === 2 ? "limegreen" : "wheat";
}

function changePlaybackRate() {
    setPlaybackRate(music.playbackRate === 2 ? 1 : 2);
}

document.getElementById("add-to-favorites-button").onclick = () => {
    // TODO: Add to favorites
}