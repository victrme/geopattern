'use strict'

import Pattern from './pattern.js'

/**
 * Options to override default parameters
 * @typedef {Object} Options
 * @property {string} [baseColor] - Controls the relative background color of the generated image
 * @property {string} [color] - Specify an exact background color. This is a CSS hexadecimal color value.
 * @property {string} [generator] - Determines the pattern
 */

/**
 * Generates an SVG pattern based on the string input
 * @param {string} [string] - String to generate from, uses new Date().toString() if empty
 * @param {Options} [options] - Options to override default parameters
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
