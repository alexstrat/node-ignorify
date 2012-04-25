var test = require('tap').test;
var browserify = require('browserify');
var ignorify = require('../index.js');

var playground_dir = __dirname+'/playground/';

test('ignorify', function (t) {
    
    var bundle = browserify();
    bundle.use(ignorify);
    bundle.addEntry(playground_dir+'index.js');

    t.ok(bundle.ignoring['./bar.js']);
    t.ok(bundle.ignoring['dgram']);

    t.end();
});