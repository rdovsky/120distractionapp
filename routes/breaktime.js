var data = require('../data.json');
/*
 * GET page 3
 */

exports.view = function(req, res){
  console.log(data);
  var random = Math.floor(Math.random() * data.length);
  var rData = data[random];
  res.render('breaktime', rData);
};
