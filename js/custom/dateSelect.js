// define variables
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

populateDays(monthSelect.value);
populateYears();

function populateDays(month) {

  while(daySelect.firstChild){
    daySelect.removeChild(daySelect.firstChild);
  }

  var dayNum;

  // 31 or 30 days?
  if(month === 'Январь' || month === 'Март' || month === 'Май' || month === 'Июль' || month === 'Август' || month === 'Октябрь' || month === 'Декабрь') {
    dayNum = 31;
  } else if(month === 'Апрель' || month === 'Июнь' || month === 'Сентябрь' || month === 'Ноябрь') {
    dayNum = 30;
  } else {
  // If month is February, calculate whether it is a leap year or not
    var year = yearSelect.value;
    (year - 2016) % 4 === 0 ? dayNum = 29 : dayNum = 28;
  }

  // inject the right number of new <option> elements into the day <select>
  for(i = 1; i <= dayNum; i++) {
    var option = document.createElement('option');
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // if previous day has already been set, set daySelect's value
  // to that day, to avoid the day jumping back to 1 when you
  // change the year
  if(previousDay) {
    daySelect.value = previousDay;

    // If the previous day was set to a high number, say 31, and then
    // you chose a month with less total days in it (e.g. February),
    // this part of the code ensures that the highest day available
    // is selected, rather than showing a blank daySelect
    if(daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }

    if(daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  // get this year as a number
  var date = new Date();
  var year = date.getFullYear();

  // Make this year, and the 100 years before it available in the year <select>
  for(var i = 0; i <= 100; i++) {
    var ageOption = document.createElement('option');
    ageOption.textContent = year-i;
    yearSelect.appendChild(ageOption);
  }
}

// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = function() {
  populateDays(monthSelect.value);
}

monthSelect.onchange = function() {
  populateDays(monthSelect.value);
}

//preserve day selection
var previousDay;

// update what day has been set to previously
// see end of populateDays() for usage
daySelect.onchange = function() {
  previousDay = daySelect.value;
}