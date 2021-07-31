function setWidthOfSearch(width){
    let searchBox = document.getElementById("search");
    searchBox.style.width=width+"%";
    if (width === 40) {
        searchBox.style.borderRadius = "999rem";
    } else {
        searchBox.style.borderRadius = "0";
    }
}

let musics = [
    {
        title: "عنوان آهنگ ۱",
        singer: "خواننده آهنگ ۱",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۲",
        singer: "خواننده آهنگ ۲",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۳",
        singer: "خواننده آهنگ ۳",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۴",
        singer: "خواننده آهنگ ۴",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۵",
        singer: "خواننده آهنگ ۵",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۶",
        singer: "خواننده آهنگ ۶",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    },
    {
        title: "عنوان آهنگ ۷",
        singer: "خواننده آهنگ ۷",
        imageURL: "images/music-art.png",
        audioURL: "assets/audios/music.mp3"
    }
]

let audios = musics.map((music) => new Audio(music.audioURL));

for (let i = 0; i < musics.length; i++){
    const music = musics[i];
    let ul = document.getElementsByClassName("music-list")[0];
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.setAttribute("class", "music-cell-header");
    let img = document.createElement("img");
    img.setAttribute("height", "60");
    img.setAttribute("width", "60");
    img.setAttribute("src", music.imageURL);
    img.setAttribute("alt", "عکس موزیک");
    let musicTitleAndSingerSpan = document.createElement("span");
    musicTitleAndSingerSpan.setAttribute("class", "music-title-and-singer");
    let musicTitleSpan = document.createElement("span");
    musicTitleSpan.setAttribute("class", "music-title");
    musicTitleSpan.innerHTML = music.title;
    let musicSingerSpan = document.createElement("span");
    musicSingerSpan.setAttribute("class", "music-singer");
    musicSingerSpan.innerHTML = music.singer;

    let musicCellControlsSpan = document.createElement("span");
    musicCellControlsSpan.setAttribute("class", "music-cell-controls");

    let a = document.createElement("a");
    a.setAttribute("href", "music.html");

    let playI = document.createElement("i");
    playI.setAttribute("class", "fa fa-play");
    playI.setAttribute("aria-hidden", "true");

    a.appendChild(playI);

    let button = document.createElement("button");

    let addToFavoritesI = document.createElement("i");
    addToFavoritesI.setAttribute("class", "fa fa-heart-o");
    addToFavoritesI.setAttribute("aria-hidden", "true");

    button.appendChild(addToFavoritesI);

    musicCellControlsSpan.appendChild(a);
    musicCellControlsSpan.appendChild(button);

    musicTitleAndSingerSpan.appendChild(musicTitleSpan);
    musicTitleAndSingerSpan.appendChild(musicSingerSpan);
    span.appendChild(img);

    let musicTitleAndSingerLink = document.createElement("a");
    musicTitleAndSingerLink.setAttribute("href", "music.html");
    musicTitleAndSingerLink.setAttribute("class", "music-title-and-singer-link");
    musicTitleAndSingerLink.appendChild(musicTitleAndSingerSpan)

    span.appendChild(musicTitleAndSingerLink);
    li.appendChild(span);
    li.appendChild(musicCellControlsSpan);
    ul.appendChild(li);
}

