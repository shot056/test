
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Test' });
};

exports.repo = function(req, res){
  console.log(req.body.repo);
  pathArray = req.body.repo.split("/");
  if ( pathArray.length === 2 ) {
    res.redirect("/repos/" + req.body.repo);
  }
  res.render('index', { title: 'Test' });
};
