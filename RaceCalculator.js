$(document).ready(function() {
    //run mile calculations on form submit
    $("#submitForm").on("submit", function(event){
        //get user input
        var distance = $("#distance").val();
        var time = $("#time").val();
        //parse user input
        var minutes = parseFloat(time.substring(0, time.indexOf(":")));
        var seconds = parseFloat(time.substring(time.indexOf(":")+1, time.length));
        var miles = parseFloat(distance)/1600;
        //perform calculations to find mile pace
        minutes += seconds/60;
        var floatPace = minutes/miles;
        var displayMinutes = floatPace >> 0;
        var displaySeconds = Math.round((floatPace % 1) * 60);
        //display mile pace in the result element
        if(displaySeconds < 10){$("#result").html("The mile pace you need to run is: "+displayMinutes+":0"+displaySeconds);}
        else{$("#result").html("The mile pace you need to run is: "+displayMinutes+":"+displaySeconds);}
        event.preventDefault();
    });
});