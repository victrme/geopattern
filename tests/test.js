'use strict'

import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { parse } from 'svg-parser'
import * as GeoPattern from '../lib/index.js'

const GENERATORS = [
	'concentricCircles',
	'diamonds',
	'hexagons',
	'mosaicSquares',
	'nestedSquares',
	'octogons',
	'overlappingCircles',
	'overlappingRings',
	'plaid',
	'plusSigns',
	'sineWaves',
	'squares',
	'tessellation',
	'triangles',
	'xes',
]

const ASSET_DIR = 'tests/assets'

describe('GeoPattern', function () {
	describe('::generate()', function () {
		it('should derive the color from the hash', function () {
			assert.equal(GeoPattern.generate('GitHub').color, '#455e8a')
		})

		describe('options.color', function () {
			it('should override the hash-derived color', function () {
				assert.equal(GeoPattern.generate('', { color: '#ff7f00' }).color, '#ff7f00')
			})
		})

		it('should derive the pattern from the hash', function () {
			assert.equal(
				GeoPattern.generate('GitHub').toString().slice(200, 250),
				'#000" stroke-opacity="0.02" x="0" y="0" width="26.'
			)
		})

		describe('options.generator', function () {
			it('should override the hash-derived generator', function () {
				assert.equal(
					GeoPattern.generate('GitHub', { generator: 'sineWaves' }).toString().slice(200, 250),
					' stroke-width="10px" d="M0 48 C 35 0, 65 0, 100 48'
				)
			})
		})
	})
})

GENERATORS.forEach(function (generator) {
	describe(generator, function () {
		it('should generate the correct SVG string', function () {
			assert.deepEqual(
				parse(GeoPattern.generate(generator, { generator }).toString()),
				parse(fs.readFileSync(path.join(ASSET_DIR, generator + '.svg'), 'utf8'))
			)
		})
	})
})
