$(document).ready(function(){
    // Initialize the slider
    $('.slider').slider({
        indicators: false, // Set to true if you want to display slide indicators
        height: 400, // Set the height of the slider
        interval: 6000, // Set the interval between slides in milliseconds (6000ms = 6 seconds)
    });

    // Initialize the side navigation
    $('.sidenav').sidenav();
});
