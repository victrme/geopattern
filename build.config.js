import { buildSync } from 'esbuild'

buildSync({
	entryPoints: ['lib/index.js'],
	outfile: 'dist/index.esm.js',
	format: 'esm',
	bundle: true,
})

buildSync({
	entryPoints: ['lib/index.js'],
	outfile: 'dist/index.min.js',
	format: 'iife',
	minify: true,
	bundle: true,
	globalName: 'GeoPattern',
})
