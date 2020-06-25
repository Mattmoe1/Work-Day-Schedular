// var date = moment().format("MMM Do YY"); found a better one that displays the time and day.
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, H:mm:ss "));

$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //puts items into the local storage that was created.
    localStorage.setItem(time, text);
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function hourTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else if (blockHour > currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
hourTracker();
})