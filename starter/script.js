
// Reference moment.js
var today = moment();
// reference entire task (time + textarea)
var timeBlockEl = document.querySelector('.container');

// Display current date and time on the paragraph with id of "currentDay"
$('#currentDay').text(today.format('LLLL')); // LLLL shows day of the week, date and time


