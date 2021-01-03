/*
    Plugin #1: bxSlider jQuery plugin to display image gallery on index.html
    Plugin #2: simple-input-toggle jQuery plugin to manage state and style of radio buttons on SignUp.html
    Widget #1: Autocomplete jQuery-UI widget to provide options for the event input field on SignUp.html
*/
/*
    Website AJAX: The website RSS feed https://www.wakecountyathletics.com/event_rss_feed?tags=5002384 is used by Calendar.html. 
                  JavaScript retrieves upcoming event data from the RSS feed for the Apex High Varsity Basketball team as a 
                  placeholder, since there aren't any upcoming events for XC/Winter Track/Spring Track, and parses 
                  the titles and dates from the RSS feed into events which are added to the FullCalendar on the page.
*/
$(document).ready(function() {
    //code to configure and render FullCalendar elements
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ]
    });
    calendar.render();
    //create AJAX request to get data from RSS feed
    $.ajax({
        method:"GET",
        url:"https://cors-anywhere.herokuapp.com/https://www.wakecountyathletics.com/event_rss_feed?tags=5002384",
    }).done(function(data){
        var $xml = $(data);
        //for each item in the RSS feed, parse the title and date  
        $xml.find("item").each(function(){
            var date = $(this).find("pubDate").text();
            var title = $(this).find("title").text().substring($(this).find("title").text().indexOf(':')+1, $(this).find("title").text().length);
            //create and add a calendar event based on the title and date
            calendar.addEvent({
                title: title,
                start: new Date(date)
            });
        });
    });
});