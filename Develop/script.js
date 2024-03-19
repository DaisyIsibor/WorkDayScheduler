// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements


$(function() {
    // Document ready function ensures the code runs after the DOM is fully loaded
    
    var currentDayEl = $('#currentDay');

    // Show today's date/ call function 
    showTodaysDate();
    
    // Generate time blocks/ call function
    generateTimeBlocks();
    
    // Load stored events from local storage
    loadStoredEvents();

   //add function to showtodaysdate
    function showTodaysDate(){
        var currentDate = dayjs().format('dddd, MMMM D[th]');
        currentDayEl.text(currentDate);
    }

    // // Function to generate time blocks/  won't be using this as HTML already have the structure
    // function generateTimeBlocks() {
        
    // }

    // Add a listener for click events on the save button
    $('.saveBtn').on('click', function() {
        var timeblockId = $(this).closest('.time-block').attr('id');
        var userInput = $(this).siblings('.description').val();
        saveEventToLocalStorage(timeblockId, userInput);
    });

     // function to save to local storage 
    function saveEventToLocalStorage(timeblockId, userInput) {
        localStorage.setItem(timeblockId, userInput);
    }

    // function to load stored event on the input box to local storage
    function loadStoredEvents() {
        for (var i = 9; i <= 17; i++) {
            var timeblockId = 'hour-' + i;
            var timeblock = $('#' + timeblockId);// removed the find synatax
            var storedEvent = localStorage.getItem(timeblockId);
    
            if (storedEvent) {
                timeblock.find('.description').val(storedEvent);
            }
        }
    }
});