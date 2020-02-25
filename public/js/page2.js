'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
$("#ready").click(submitNewActivity);

}

/*
 * Pass the new goal and suggestion data to page3
 */
function submitNewActivity(e) {
	e.preventDefault();
	window.location.href = '/page3?goal=' + $("#goal").val() + "&suggestion=" + $("#suggestion").val();

}
