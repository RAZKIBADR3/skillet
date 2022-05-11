var comp = 0;
var image = document.getElementById("image");
function slidenext(){
    if (comp==0) {
        image.src = "/img/skillet2.jpg";
        document.getElementById("music").src = "/music/skillet2.mp3";
        comp++;
    }else if (comp == 1) {
        image.src = "/img/skillet3.jpg";
        document.getElementById("music").src = "/music/skillet3.mp3";
        comp++;
    }else if (comp == 2) {
        image.src = "/img/skillet1.jpg";
        document.getElementById("music").src = "/music/skillet1.mp3";
        comp-=2;
    };
}

function slideprevious(){
    if (comp==0) {
        image.src = "/img/skillet3.jpg";
        document.getElementById("music").src = "/music/skillet3.mp3";
        comp+=2;
    }else if (comp == 1) {
        image.src = "/img/skillet1.jpg";
        document.getElementById("music").src = "/music/skillet1.mp3";
        comp--;
    }else if (comp == 2) {
        image.src = "/img/skillet2.jpg";
        document.getElementById("music").src = "/music/skillet2.mp3";
        comp--;
    }
}

var x = 0;
function volumeOn(){
    if (x==0) {
        document.getElementById("volume").src = "/icons/volumeOff1.png";
        x++;
        audio.muted = "true";
    }else if (x==1) {
        document.getElementById("volume").src = "/icons/volumeOn1.png";
        x--;
        audio.muted = "false";
    }
}

function volumeOver(){
    if (x==0) {
        document.getElementById("volume").src = "/icons/volumeOn2.png";
    }
    else if (x==1) {
        document.getElementById("volume").src = "/icons/volumeOff2.png";
    }
}

function volumeOut(){
    if (x==0) {
        document.getElementById("volume").src = "/icons/volumeOn1.png";
    }
    else if (x==1) {
        document.getElementById("volume").src = "/icons/volumeOff1.png";
    }
}

var audio = document.getElementById("audio");
var y = 0;
function playPause(){
    if (y == 0){
        document.getElementById("playPause").src = "/icons/play.png";
        audio.play();
        y++;
    }else if (y == 1) {
        document.getElementById("playPause").src = "/icons/pause.png";
        audio.pause();
        y--;
    };
}
