var data = require("../data.json");

exports.addSuggestion = function(request, response) {
    console.log("addSuggestion called")
    var suggestion = request.query.suggestion;

    var newSuggestion = {
        suggestion: suggestion,
    }

    data.suggestions.push(newSuggestion);
    response.redirect('/');
    console.log()
    //res.render('add', data);
}
