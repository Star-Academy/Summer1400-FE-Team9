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
        singer: "خواننده‌ی آهنگ ۱",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۲",
        singer: "خواننده‌ی آهنگ ۲",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۳",
        singer: "خواننده‌ی آهنگ ۳",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۴",
        singer: "خواننده‌ی آهنگ ۴",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۵",
        singer: "خواننده‌ی آهنگ ۵",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۶",
        singer: "خواننده‌ی آهنگ ۶",
        imageURL: "images/music-art.png"
    },
    {
        title: "عنوان آهنگ ۷",
        singer: "خواننده‌ی آهنگ ۷",
        imageURL: "images/music-art.png"
    }
]

musics.forEach((value) => {
    let ul = document.getElementsByClassName("music-list")[0];
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.setAttribute("class", "music-cell-header");
    let img = document.createElement("img");
    img.setAttribute("height", "60");
    img.setAttribute("width", "60");
    img.setAttribute("src", value.imageURL);
    img.setAttribute("alt", "عکس موزیک");
    let musicTitleAndSingerSpan = document.createElement("span");
    musicTitleAndSingerSpan.setAttribute("class", "music-title-and-singer");
    let musicTitleSpan = document.createElement("span");
    musicTitleSpan.setAttribute("class", "music-title");
    musicTitleSpan.innerHTML = value.title;
    let musicSingerSpan = document.createElement("span");
    musicSingerSpan.setAttribute("class", "music-singer");
    musicSingerSpan.innerHTML = value.singer;

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
    addToFavoritesI.setAttribute("class", "fa fa-heart");
    addToFavoritesI.setAttribute("aria-hidden", "true");

    button.appendChild(addToFavoritesI);

    musicCellControlsSpan.appendChild(a);
    musicCellControlsSpan.appendChild(button);

    musicTitleAndSingerSpan.appendChild(musicTitleSpan);
    musicTitleAndSingerSpan.appendChild(musicSingerSpan);
    span.appendChild(img);
    span.appendChild(musicTitleAndSingerSpan);
    li.appendChild(span);
    li.appendChild(musicCellControlsSpan);
    ul.appendChild(li);
})