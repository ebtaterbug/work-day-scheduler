var events = [];

var currentDay = function() {
    $("#currentDay").html(moment().format("dddd, MMMM Do"));
}
currentDay();