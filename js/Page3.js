let boxes = document.querySelectorAll(".box");
let index = 0;  
let direction = 1;  
let interval;
let audio = document.querySelector("audio");

function changeColor() {
    // Reset all boxes to white
    boxes.forEach(function(box) {
        box.style.backgroundColor = "white";
    });

    // Apply red color to the current index
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

    

    // Determine next position
    index += direction;

    // Reverse direction if at the end or beginning
    if (index === boxes.length - 1 || index === 0) {
        direction *= -1;
    }
}

// Event listener for the Start button
document.getElementById("start").addEventListener("click", function() {
    if (!interval) {  // Prevent starting multiple intervals
        interval = setInterval(changeColor, 100);  // Run function every 300ms
        audio.loop = true; // Enable looping
        audio.play(); // Play the audio
    }
});

// Event listener for the Stop button
document.getElementById("stop").addEventListener("click", function() {
    clearInterval(interval);  // Stop the interval
    interval = null;  // Reset interval variable
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset audio to the beginning
});