var time = moment().hours();

$("#currentDay").html(moment().format("dddd, MMMM Do"));

function checkTime() {
    $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id"));
        
        console.log(this);

        if (timeBlockId < time) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (timeBlockId === time) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    });
};

checkTime();