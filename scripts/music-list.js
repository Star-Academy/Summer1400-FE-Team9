function setWidthOfSearch(width){
    let searchBox = document.getElementById("search");
    searchBox.style.width=width+"%";
    if (width === 40) {
        searchBox.style.borderRadius = "999rem";
    } else {
        searchBox.style.borderRadius = "0";
    }
}