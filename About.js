/*
    Plugin #1: bxSlider jQuery plugin to display image gallery on index.html
    Plugin #2: simple-input-toggle jQuery plugin to manage state and style of radio buttons on SignUp.html
    Widget #1: Autocomplete jQuery-UI widget to provide options for the event input field on SignUp.html
*/
/*
    File AJAX: The file about.json is used by About.html. JavaScript retrieves every page title 
               and description from about.json in order to populate the content for the page, new 
               page information can be added to the JSON and the page will update accordingly.
*/
$(document).ready(function() {
    //clear infoList placeholder text
    $("#infoList").html('');
    //create AJAX request to get data from json file
    $.ajax({
        method:"GET",
        url:"about.json",
        dataType: "json",
        //if the file is parsed, run the processing function
        success:function(data){
            //for each entry in the file, add an about section with correct data
            $(data.aboutText).each(function() {
                $("#infoList").append('<li><b>'+
                this.pageTitle + ':</b> ' +  
                this.pageInfo +
                '</li>');
            });
        }
    });
});