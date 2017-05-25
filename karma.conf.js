const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');

// Karma configuration
// Generated on Thu May 25 2017 10:31:52 GMT+0200 (CEST)

module.exports = function(config) {
	config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha', 'chai'],


	// list of files / patterns to load in the browser
	files: [
		'test/*.js'
	],


	// list of files to exclude
	exclude: [
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'test/**/*.js': [ 'rollup' ]
	},

	rollupPreprocessor: {
		plugins: [
			resolve({ jsnext: true, main: true}),
			commonjs(),
			replace({
				'process.env.NODE_ENV': process.env.NODE_ENV,
			}),
			babel({
				exclude: 'node_modules/**',
				babelrc: false,
				presets: [
					[
						"latest", 
						{"es2015": 
							{"modules": false}
						}
					],
					"react"
				
				],
				plugins: ["external-helpers"]
			}),
		],
		format: 'iife',
		sourceMap: 'inline'
	},


	plugins: [
		'karma-mocha',
		'karma-chai',
		'karma-mocha-reporter',
		'karma-rollup-plugin',
		'karma-ie-launcher', 
		'karma-safari-launcher', 
		'karma-firefox-launcher', 
		'karma-chrome-launcher',
	],

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: false,

	reporters: ['mocha'],


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['IE', 'Safari', 'Firefox', 'Chrome'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity
	})
}
