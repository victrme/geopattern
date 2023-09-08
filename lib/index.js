'use strict'

import Pattern from './pattern.js'

/**
 * Generates an SVG pattern based on the string input
 * @param {?string} string - String to generate from, uses new Date().toString() if empty
 * @param {?Options} options - Options to override default parameters
 * @returns {Pattern}
 */
export function generate(string, options) {
	if (typeof string === 'object') {
		options = string
		string = null
	}

	if (string === null || string === undefined) {
		string = new Date().toString()
	}

	if (!options) {
		options = {}
	}

	return new Pattern(string, options)
}
