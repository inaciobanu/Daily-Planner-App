
// Reference moment.js
var today = moment();
// reference task entered by user (time + textarea)
var timeBlockEl = document.querySelector('.container');

// Display current date and time on the paragraph with id of "currentDay"
$('#currentDay').text(today.format('LLLL')); // LLLL shows day of the week, date and time

// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save info in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Function for tracking tasks and making them change colors depending on where they ar eon the timescale: past, present or future
function auditTask() {
  // get current time
  var currentHour = today.hours();

  // loop over each time block
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add past class
    if (timeId < currentHour) {
      $(this).addClass('past');
    } // if time Id attribute = current hour, remove past and future classes, add present class
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If time Id attribute is > than current time, remove past and present classes, add future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Call the audit task function
auditTask();

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
  // clear the current URL
  location = ''; // location references the current URL
}, 1000 * 60);
