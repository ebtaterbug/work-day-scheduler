var time = moment().hours();

$("#currentDay").html(moment().format("dddd, MMMM Do"));

function checkTime() {
    $(".time-block").each(function () {
        var timeBlockId = parseInt($(this).attr("id"));
        
        if (timeBlockId === time) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else if (timeBlockId > time) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    });
};

$(".saveBtn").on("click", function () {
    localStorage.setItem(
        $(this).siblings(".hour").text(), 
        $(this).siblings(".description").val()
    );
});

function loadData() {
    $(".hour").each(function() {
        var savedEvent = localStorage.getItem($(this).text());

        if(savedEvent) {
            $(this).siblings(".description").text(savedEvent);
        }
    });
};

checkTime();
loadData();