(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var sourcemaps = require('gulp-sourcemaps');
    var cleanCSS = require('gulp-clean-css');
    var sass = require('gulp-sass');
    var rename = require('gulp-rename');
    var livereload = require('gulp-livereload');

    var config = require('./../../../gulpfile.config.js');

    gulp.task('sass', function () {
        return gulp.src(config.paths.sassMain)
            .pipe(sourcemaps.init())
            .pipe(sass({
                errLogToConsole : true
            }).on('error', sass.logError))

            .pipe(gulp.dest(config.paths.dist + '/assets/css/'))

            .pipe(cleanCSS({
                compatibility : 'ie9'
            }))

            .pipe(rename({extname : '.min.css'}))
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest(config.paths.dist + '/assets/css/'))
            .pipe(livereload());
    });


})();
