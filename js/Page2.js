// let boxes = document.querySelectorAll(".box");
// let index = 1;
// function changeColor(){
//     boxes.forEach((box) => {
//         box.style.backgroundColor = "white";
//     });

//     let index1 = index;
//     let index2 = (index - 1 + boxes.length) % boxes.length;
//     let index3 = (index - 2 + boxes.length) % boxes.length;
//     let index4 = (index - 3 + boxes.length) % boxes.length;
//     let index5 = (index - 4 + boxes.length) % boxes.length;
//     let index6 = (index - 5 + boxes.length) % boxes.length;


//     boxes[index1].style.backgroundColor = "green";
//     boxes[index2].style.backgroundColor = "red";
//     boxes[index3].style.backgroundColor = "rgb(203, 71, 93)";
//     boxes[index4].style.backgroundColor = "rgb(255, 191, 205)";
//     boxes[index5].style.backgroundColor = "yellow";
//     boxes[index6].style.backgroundColor = "blue";

//     index = (index+1) % boxes.length;
// }
        
// setInterval(changeColor,500);


$(document).ready(function(){
    let boxes = document.querySelectorAll('.box');
    console.log(boxes);
    
    let interval;
    $(".start").click(function(){
        animation();
    });

    $(".stop").click(function(){
        clearInterval(interval);
    });

    function animation() {
         interval = setInterval(() => {
            let lastBoxColor = $(boxes[boxes.length - 1]).css("background-color");

            for (let index = boxes.length - 1; index > 0; index--) {
                $(boxes[index]).css("background-color", $(boxes[index - 1]).css("background-color"));
            }

            $(boxes[0]).css("background-color", lastBoxColor);
        }, 500);
    }
});