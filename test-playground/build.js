var bundle = require('browserify')();

f = require('../index.js');
//bundle.ignore('./bar.js')
bundle.register(f);
bundle.addEntry(__dirname+'/index.js');
console.log(bundle.bundle());

//console.log(bundle.ignoring);