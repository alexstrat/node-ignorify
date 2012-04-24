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


**warning :** cli plugin options doesn't work since *scopify* is not a proper middleware but a wrapper. 

### Test

```bash
$ npm test
```