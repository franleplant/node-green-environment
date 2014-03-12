var gulp = require('gulp'),
	env_spitter = require('./env_spitter.js');



gulp.task('default', function() {
	env_spitter();
});