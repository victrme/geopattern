import { buildSync } from 'esbuild'

buildSync({
	entryPoints: ['lib/index.js'],
	outfile: 'dist/cjs/geopattern.cjs.js',
	format: 'cjs',
	bundle: true,
})

buildSync({
	entryPoints: ['lib/**/*.js'],
	outdir: 'dist/esm',
	format: 'esm',
})

buildSync({
	entryPoints: ['lib/index.js'],
	outfile: 'dist/geopattern.min.js',
	format: 'iife',
	minify: true,
	bundle: true,
	globalName: 'GeoPattern',
})
