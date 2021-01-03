/*
    Plugin #1: bxSlider jQuery plugin to display image gallery on index.html
    Plugin #2: simple-input-toggle jQuery plugin to manage state and style of radio buttons on SignUp.html
    Widget #1: Autocomplete jQuery-UI widget to provide options for the event input field on SignUp.html
*/
$(document).ready(function() {
    //run bxSlider jQuery plugin on the slider element and configure options
    $("#slider").bxSlider({
        moveSlides: 1,
        auto: true,
        pause: 5000,
    });
});