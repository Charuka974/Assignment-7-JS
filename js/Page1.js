$(document).ready(function(){
    let interval;
    
    function switchHumans() {
        let humans = $(".man-container");
        
        let lastHuman = humans.last();
        lastHuman.detach(); // remove  the last human division
        $("#human-container").prepend(lastHuman); // put the last human to  the front
    }

    $(".start").click(function(){
        // console.log(interval);
        if (!interval) {
            interval = setInterval(switchHumans, 1000);
        }
    }); 

    $(".stop").click(function(){
        clearInterval(interval);
        interval = null;
    });
});