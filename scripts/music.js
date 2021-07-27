let audio = new Audio('assets/audios/music.mp3');

let playButton = document.getElementById("play-button");
playButton.onclick = ev => {
    if (playButton.innerHTML === "▷") {
        audio.play();
        playButton.innerHTML = "||"
    } else {
        audio.pause();
        playButton.innerHTML = "▷"
    }
}

let twoXButton = document.getElementById("two-x-button");
twoXButton.onclick = ev => {
    if (audio.playbackRate === 2) {
        twoXButton.style.borderWidth = "0";
        audio.playbackRate = 1;
    } else {
        twoXButton.style.borderWidth = "0.35rem";
        audio.playbackRate = 2;
    }
}

document.getElementById("add-to-favorites-button").onclick = ev => {
    // TODO: Add to favorites
}