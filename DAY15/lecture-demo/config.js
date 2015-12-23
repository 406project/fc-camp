'use strict';

/**
 * 파일 경로
 * --------------------------------
 */
var paths = {
	'html': './src/**/*.html',
	'sass': {
		'src':  './src/sass/**/*.{sass,scss}',
		'dest': './src/css'
	},
	'browserify': {
		'src':             'src/js/app.js',
		// 'watch_files':     ['src/js/app.js', 'src/app/**/*.js'],
		'watch_files':     ['src/js/app.js'],
		'dest':            'src/js',
		'output_filename': 'app-bundle.js',
		'debugging':       true,
		'map_location':    './'
	}
};

/**
 * 옵션
 * --------------------------------
 */
var options = {
	'sass': {
		'outputStyle': 'compressed'
	},
	'browserify': {
		'entries': paths.browserify.src,
		'debug':   paths.browserify.debugging
	},
	'browserSync': {
		'server': './src'
	}
};

/**
 * Config Module 공개
 * --------------------------------
 */
module.exports = {
	'paths':   paths,
	'options': options
};