// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
$(function() {
    // Document ready function ensures the code runs after the DOM is fully loaded
    
    // Show today's date
    showTodaysDate();
    
    // Generate time blocks
    generateTimeBlocks();
    
    // Load stored events from local storage
    loadStoredEvents();
    

    // add the time diaplay

    function showTodaysDate(){
        var currentDate = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
        currentDayEl.text(currentDate);

    }
    // Add a listener for click events on the save button
    $('.saveBtn').on('click', function() {
    var timeblockId = $(this).closest('.time-block').attr('id');
    var userInput = $(this).siblings('.description').val();
    saveEventToLocalStorage(timeblockId, userInput);
    
    }
    )
}
);
    
    function saveEventToLocalStorage(timeblockId, userInput) {
    localStorage.setItem(timeblockId, userInput);
    }
    
    function loadStoredEvents() {
    for (var i = 9; i <= 17; i++) {
    var timeblockId = 'hour-' + i;
    var timeblock = $('#' + timeblockId).find('hour, .description, .savebtn');
    var storedEvent = localStorage.getItem(timeblockId);
    
    if (storedEvent) {
    timeblock.find('.description').val(storedEvent);
    
    }
}
}


