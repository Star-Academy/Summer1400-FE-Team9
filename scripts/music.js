let audio = new Audio('assets/audios/music.mp3');

let progressBar = document.getElementById("progress-bar");
progressBar.value = 20;

progressBar.onchange = ev => {
    audio.currentTime = progressBar.value * audio.duration / 100;
}

setTimeout(() => {
    console.log(audio.currentTime);
    console.log(audio.duration);
    progressBar.value = 100 * (audio.currentTime / audio.duration);
    //progressBar.setAttribute("value", "" + 100 * audio.currentTime / audio.duration);
}, 0.1);

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