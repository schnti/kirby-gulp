(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var livereload = require('gulp-livereload');

    var config = require('./../../../gulpfile.config.js');

    gulp.task('html', function () {
        return gulp.src(config.paths.html)
            .pipe(livereload());
    });

})();