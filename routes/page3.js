var data = {};

/*
 * GET page 3
 */

exports.view = function(req, res){
data['viewAlt'] = false;
  res.render('page3', data);
};


exports.viewAlt = function(req, res){
data['viewAlt'] = true;
  	res.render('page3', data);
};
