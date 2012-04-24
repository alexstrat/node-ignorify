var path = require('path'),
    commondir = require('commondir');

module.exports = function(body, file) {
  var bundle = this;
  //console.log(file);
  var re = /\/\/@browserify-ignore[\s\n]+.*require\([\'\"](.*)[\'\"]\).*/g;
  var ignored = [];

  while (match = re.exec(body)) {
    ignored.push(match[1]);
    //console.log(match[1]);
  }

  var dir = path.dirname(file);
  //console.log(dir)
  var root = commondir(dir, ignored.concat(file));
  file = path.resolve(process.cwd(), file);
    
  ignored.forEach(function (r) {
      var x = r.match(/^(\.\.?)?\//) ? path.resolve(dir, r) : r;
      //console.log(r);
      bundle.ignore(x);
  });

  return body;
};