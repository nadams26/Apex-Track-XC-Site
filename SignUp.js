/*
    Plugin #1: bxSlider jQuery plugin to display image gallery on index.html
    Plugin #2: simple-input-toggle jQuery plugin to manage state and style of radio buttons on SignUp.html
    Widget #1: Autocomplete jQuery-UI widget to provide options for the event input field on SignUp.html
*/
$(document).ready(function() {
    //define options for autocomplete
    var tags = [ "100m", "200m", "400m", "800m", "1600m", "3200m", "Pole Vault", "High Jump", "Long Jump", "Triple Jump", "Hurdles", "Shot Put", "100m Relay", "400m Relay"];
    //create Autocomplete jQuery-UI widget for the event input field
    $("#event").autocomplete({
        source: function( request, response ) {
            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
            response( $.grep( tags, function( item ){
                return matcher.test( item );
            }));
        }
    });
    //activate the simple-input-toggle jQuery plugin on the radio buttons
    $('#sportSwitch').toggleInput();
    //when Cross Country is selected, hide the event input field
    $('#XClabel').click(function(){
        $('#eventInput').hide();
    });
    //when Track & Field is selected, show the event input field
    $('#tracklabel').click(function(){
        $('#eventInput').show();
    });
});