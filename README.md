knights-templar
==========
compile ye javascript templates from doth external files in node.js.

[![Build Status](https://travis-ci.org/andyperlitch/knights-templar.png)](https://travis-ci.org/andyperlitch/knights-templar)

##usage

    var kt = require('knights-templar');
    var template = kt.make(__dirname+'/template.html', 'hbs');
    var markup = template({ name: 'andy', age: 24 });

##methods

###kt.make(path,[type])
compiles content from a file located at `path` into a template function specified by `type` (defaults to Handlebars).

##types

- **'hbs'** - Handlebars
- **'_'** - Underscore templates (erb-style)

##use in the browser with browserify

To use this in the browser via browserify, set a global variable `KT_BASE_URL` which will be the prefix for all templates, and should contain `https://`
	
Somewhere in the html:

	<script> window.KT_BASE_URL = 'http://localhost:9999/public'; </script>

then...

	var kt = require('knights-templar');

	var template = kt.make(__dirname+'/some_template.html', '_');

	var html = template({ name: 'andy' });

	$('body').append(html);

##license
MIT