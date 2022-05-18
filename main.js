var comp = 0;
var image = document.getElementById("image");
var audio = document.getElementById("audio");
function slidenext(){
    x = playPause();
    if (comp==0) {
        image.src = "img/skillet2.jpg";
        audio.src = "music/skillet2.mp3";
        comp++;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    }else if (comp == 1) {
        image.src = "img/skillet3.jpg";
        audio.src = "music/skillet3.mp3";
        comp++;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    }else if (comp == 2) {
        image.src = "img/skillet1.jpg";
        audio.src = "music/skillet1.mp3";
        comp-=2;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    };
};

function slideprevious(){
    x = playPause();
    if (comp==0) {
        image.src = "img/skillet3.jpg";
        audio.src = "music/skillet3.mp3";
        comp+=2;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    }else if (comp == 1) {
        image.src = "img/skillet1.jpg";
        audio.src = "music/skillet1.mp3";
        comp--;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    }else if (comp == 2) {
        image.src = "img/skillet2.jpg";
        audio.src = "music/skillet2.mp3";
        comp--;
        if (x == 1) {
            playPause();
        }else{
            audio.pause();
        };
    };
};

var j = 0;
function volumeOn(){
    if (j==0) {
        document.getElementById("volume").src = "icons/volumeOff1.png";
        j++;
        audio.muted = "true";
    }else if (j==1) {
        document.getElementById("volume").src = "icons/volumeOn1.png";
        j--;
        audio.muted = "";
    }
}

function volumeOver(){
    if (j==0) {
        document.getElementById("volume").src = "icons/volumeOn2.png";
    }
    else if (j==1) {
        document.getElementById("volume").src = "icons/volumeOff2.png";
    }
}

function volumeOut(){
    if (j==0) {
        document.getElementById("volume").src = "icons/volumeOn1.png";
    }
    else if (j==1) {
        document.getElementById("volume").src = "icons/volumeOff1.png";
    }
}

var y = 0;
function playPause(){
    if (y == 0){
        document.getElementById("playPause").src = "icons/play.png";
        audio.play();
        y++;
        return 1;
    }else if (y == 1) {
        document.getElementById("playPause").src = "icons/pause.png";
        audio.pause();
        y--;
        return 0;
    };
}
