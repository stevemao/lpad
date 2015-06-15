'use strict';
module.exports = function (str, pad) {
	return pad ? String(str).split(/\r?\n/).map(function (line) {
		if (line) {
			line = pad + line;
		}

		return line;
	}).join('\n'): str;
};
