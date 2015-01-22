'use strict';
var test = require('ava');
var isMd = require('./');

test(function (t) {
	t.assert(isMd('src/unicorn.md'));
	t.assert(isMd('unicorn.MD'));
	t.assert(isMd('unicorn.markdown'));
	t.assert(!isMd('unicorn.png'));
	t.assert(!isMd('unicorn'));
	t.end();
});
