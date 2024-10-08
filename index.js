
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function (event) {
  makesound(event.key);
})
function makesound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("/Drum+Kit+Starting+Files/Drum Kit Starting Files/sounds/tom-4.mp3");
            audio7.play();
            break;

        default: console.log("hello world")
            break;
    }
}