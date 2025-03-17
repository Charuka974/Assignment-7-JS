let boxes = document.querySelectorAll(".box");
let index = 0;  
let direction = 1;  
let interval;
let audio = document.querySelector("audio");

function changeColor() {
    boxes.forEach(function(box) {
        box.style.backgroundColor = "white";
    });

    boxes[index].style.backgroundColor = "#CC0000";

    if(direction > 0 && index > 0){
        boxes[index-1].style.backgroundColor = "#FF0000";
        if (index > 1) {
            boxes[index-2].style.backgroundColor = "#FF3333";
            if (index > 2) {
                boxes[index-3].style.backgroundColor = "#FF6666";
            }
        }
    }
    if(direction < 0 && index < boxes.length-1){
        boxes[index+1].style.backgroundColor = "#FF0000";
        if (index < boxes.length-2) {
            boxes[index+2].style.backgroundColor = "#FF3333";
            if (index < boxes.length-3) {
                boxes[index+3].style.backgroundColor = "#FF6666";
            }
        }
    }

    

    // check the next position of index
    index += direction;

    // Reverse direction at the end and the beginning
    if (index === boxes.length - 1 || index === 0) {
        direction *= -1;
    }
}

document.getElementById("start").addEventListener("click", function() {
    if (!interval) {
        interval = setInterval(changeColor, 100);
        audio.loop = true;
        audio.play();
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
    audio.pause();
    audio.currentTime = 0;
});