node-ignorify
=============

Browserify middleware that allows to specify ignore rules in source code

### Installation

```bash
$ npm install ignorify
```

### Usage

Just throw the *ignorify* tag before the require statement you want to be ignored by browserfy.

```js
//@browserify-ignore
var foo = require('./dontrequireit');
```

Then, during the bundling specify the *ignorify* middleware :

```js
var browserify = require('browserify');
var ignorify = require('ignorify');

var bundle = browserify();
bundle.register(ignorify);
bundle.addEntry('./index.js');
bundle.bundle();
```


Or :
	
```bash
$ browserify entry.js -p 'ignorify' -o browserify.js
```

### Test

```bash
$ npm test
```