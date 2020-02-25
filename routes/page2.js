var data = require('../data.json');
/*
 * GET page 2
 */

exports.view = function(req, res){
  console.log("goal");
  //console.log(data);
  res.render('page2', data);
};
