(function () {
    /* global require */
    'use strict';

    var gulp = require('gulp');

    // load config
    var config = require('./gulpfile.config.js');

    require('kirby-gulp/web/gulpfile');

    gulp.task('default', gulp.series('web'));

    gulp.task('watch', gulp.series('web:watch'));
})();