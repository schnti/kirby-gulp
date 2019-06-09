(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var livereload = require('gulp-livereload');

    var config = require('./../../../gulpfile.config.js');


    gulp.task('web', gulp.parallel('bower', 'sass', 'js'));

    gulp.task('web:watch', gulp.parallel(
        'bower', 'sass', 'js',
        function () {
            livereload.listen();

            gulp.watch(config.paths.sass, gulp.series('sass'));
            gulp.watch(config.paths.html, gulp.series('html'));
            gulp.watch(config.paths.js, gulp.series('js'));
        }));

})();
