// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  console.log("ready!")
  //Day.js to populate current day
  $("#currentDay").text(dayjs().format('MMM D, YYYY'));


  //Button that saves each time block entry
  var saveBtn = $(".saveBtn");

  //Day.js to pull in current hour for scheduler color schemes
  var hour = dayjs().hour();
  console.log(hour);

  //Assign time block background color dependent on current time
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));
    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });

  //Add a listener for click event on the save button and save input in local storage
  saveBtn.on("click", function (event) {
    event.preventDefault();
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".description").val();
    localStorage.setItem(time, input);
  })

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

$("#9 .description").val(localStorage.getItem("9AM"))
$("#10 .description").val(localStorage.getItem("10AM"))
$("#11 .description").val(localStorage.getItem("11AM"))
$("#12 .description").val(localStorage.getItem("12PM"))
$("#13 .description").val(localStorage.getItem("1PM"))
$("#14 .description").val(localStorage.getItem("2PM"))
$("#15 .description").val(localStorage.getItem("3PM"))
$("#16 .description").val(localStorage.getItem("4PM"))
$("#17 .description").val(localStorage.getItem("5PM"))

});