var path = require('path');

var ignore_tag = "@browserify-ignore";

module.exports = function(bundle) {
  bundle.register(function(body, file) {
    var dir = path.dirname(file);
    
    var re = new RegExp("\x5C/\x5C/"+ignore_tag+"[\x5Cs\x5Cn]+.*require\x5C([\x5C'\x5C\"](.*)[\x5C'\x5C\"]\x5C).*", "g");
    var ignoring = [];

    while (match = re.exec(body)) {
      var r = match[1];
      ignoring.push(r.match(/^(\.\.?)?\//) ? path.resolve(dir, r) : r);
    }

    //ignoring-list is overriden by browserify
    //at each call to ignore (bug? see #133)
    var keys = [];
    for(var i in bundle.ignoring) {
      if(bundle.ignoring[i])
        keys.push(i);
    }

    bundle.ignore(ignoring.concat(keys));

    return body;
  });
}
