'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#congrats").append(getQueryVariable("goal"));
	$("#startover").click(startoverClick);
}

function startoverClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	window.location.href = '/page2';

}
