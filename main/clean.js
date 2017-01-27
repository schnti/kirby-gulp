(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var del = require('del');

    var config = require('./../../../gulpfile.config.js');

    gulp.task('clean', function () {

        return del([
            config.paths.dist + '/**/*'
        ]);
    });

})();
