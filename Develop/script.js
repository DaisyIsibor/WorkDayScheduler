// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDayEl = $('#currentDay');
$(function() {
    // Document ready function ensures the code runs after the DOM is fully loaded
    
    // Show today's date/ call function 
    showTodaysDate();
    
    // Generate time blocks/ call function
    generateTimeBlocks();
    
    // Load stored events from local storage
    loadStoredEvents();
    

    //add function for showtodaysdate

    function showTodaysDate(){
        var currentDate = dayjs('2024-02-05').format('dddd,MMMM D[th]')
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
    // function to save to local storage 
    function saveEventToLocalStorage(timeblockId, userInput) {
    localStorage.setItem(timeblockId, userInput);
    }
    

    // function to load stored event on the input box to local storage
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


