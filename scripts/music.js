let music = document.getElementById("music");
let twoXButton = document.getElementById("two-x-button");

function setPlaybackRate(rate) {
    music.playbackRate = rate;
    if (rate === 2) {
        twoXButton.style.borderWidth = "0.35rem";
    } else {
        twoXButton.style.borderWidth = "0";
    }
}

function changePlaybackRate() {
    if (music.playbackRate === 2) {
        setPlaybackRate(1);
    }
    else {
        setPlaybackRate(2);
    }
}

document.getElementById("add-to-favorites-button").onclick = ev => {
    // TODO: Add to favorites
}