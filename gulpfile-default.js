(function () {
    /* global require */
    'use strict';

    var gulp = require('gulp');
    var runSequence = require('run-sequence');

    // load config
    var config = require('./gulpfile.config.js');

    require('SPIRIT21-gulp/web/gulpfile');

    gulp.task('default', function (done) {
        runSequence(
            'web',
            done);
    });

    gulp.task('watch', function (done) {

        runSequence(
            'web:watch',
            done);
    });
})();