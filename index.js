'use strict';
const path = require('path');
const markdownExtensions = require('markdown-extensions');

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	return markdownExtensions.includes(path.extname(input).slice(1).toLowerCase());
};
