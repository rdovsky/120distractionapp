'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
$("#ready").click(projectClick);

}

function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	window.location.href = '/page3?goal=' + $("#goal").val() + "&suggestion=" + $("#suggestion").val();

}
