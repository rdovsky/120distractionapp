'use strict';


$(document).ready(function() {
	initializePage();
})


function initializePage() {
$("#yes").click(yesClick);
$("#no").click(noClick);
ga("send", "event", 'yes', 'click');

}

function yesClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	window.location.href = '/finish?goal=' + getQueryVariable("goal");

}

function noClick(e) {
	// prevent the page from reloading
	e.preventDefault();
	window.location.href = '/page2';

}


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
