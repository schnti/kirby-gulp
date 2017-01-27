(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var livereload = require('gulp-livereload');

    var config = require('./../../../gulpfile.config.js');


    gulp.task('web', function (done) {
        runSequence(
            //'clean',
            ['bower', 'sass'],
            done);
    });

    gulp.task('web:watch', function (done) {

        runSequence(
            //'clean',
            ['bower', 'sass'],
            done);

        livereload.listen();

        gulp.watch(config.paths.sass, ['sass']);
        gulp.watch(config.paths.html, ['html']);

    });

})();
