(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var plumber = require('gulp-plumber');
    var concat = require('gulp-concat-util');
    var rename = require('gulp-rename');
    var sourcemaps = require('gulp-sourcemaps');
    var uglify = require('gulp-uglify');

    var config = require('./../../../gulpfile.config.js');

    gulp.task('js', function () {
        return gulp.src(config.paths.js)
            .pipe(plumber())
            .pipe(concat('main', {
                process : function (src) {
                    return (src.trim() + '\n').replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                }
            }))
            .pipe(concat.header('(function(window, document, undefined) {\n\'use strict\';\n'))
            .pipe(concat.footer('\n})(window, document);\n'))
            .pipe(rename({
                extname : ".js"
            }))
            .pipe(gulp.dest(config.paths.dist + '/assets/js/'))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(rename({
                extname : ".min.js"
            }))
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest(config.paths.dist + '/assets/js/'));
    });

})();
