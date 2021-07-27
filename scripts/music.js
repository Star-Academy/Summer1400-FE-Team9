let music = document.getElementById("music");
let twoXButton=document.getElementById("two-x-button");

function setPlaybackRate(rate) {
    music.playbackRate = rate;
    if (rate === 2) {
        twoXButton.style.borderWidth = "0";
    } else {
        twoXButton.style.borderWidth = "0.35rem";
    }
}

document.getElementById("add-to-favorites-button").onclick = ev => {
    // TODO: Add to favorites
}