
/*
 * GET users listing.
 */
var https = require('https');

exports.list = function(req, res){
  var options = {
    host: "api.github.com",
    path: "/repos/" + req.params.owner + "/" + req.params.repo + "/contributors",
    method: "GET"
  };
  var contributors = [];
  console.log(options.path);
  var req = https.request(options, function(apires) {
    console.log(apires.statusCode);
    var body = "";
    apires.on("data", function(d) {
      body += d.toString();
    });
    apires.on("end", function() {
      contributors = JSON.parse(body);
      //console.log(contributors);
      res.render('list', {title: "Test", users: contributors});
    });
  });
  req.end();

  req.on("error", function(e) {
    console.error(e);
  });

};
