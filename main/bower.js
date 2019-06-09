(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var using = require('gulp-using');
    var expect = require('gulp-expect-file');
    var sourcemaps = require('gulp-sourcemaps');
    var concat = require('gulp-concat-util');

    var config = require('./../../../gulpfile.config.js');

    var defaultTasks = [];

    function createTask(name, key) {
        gulp.task(name, function () {

            var folder = (config.bower.assets[key].dist) ? config.bower.assets[key].dist : 'assets/';

            return gulp.src(config.bower.assets[key].src, {
                base : config.paths.bower + '/' + config.bower.assets[key].base,
                cwd : config.paths.bower
            })
                .pipe(using())
                .pipe(gulp.dest(config.paths.dist + '/' + folder));
        });
    }

    for (var key in config.bower.assets) {

        var taskName = 'bower:assets:' + key;

        createTask(taskName, key);
        defaultTasks.push(taskName);
    }

    gulp.task('bower:assets', gulp.series(defaultTasks));

    gulp.task('bower:js', function () {
        // es tritt ein Problem auf, wenn für config.bower.js keine Datei angegeben ist
        return gulp.src(config.bower.js, {cwd : config.paths.bower})
            .pipe(expect(config.bower.js))
            .pipe(sourcemaps.init())
            .pipe(concat('bower.js'))
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest(config.paths.dist + '/assets/js/'));

    });

    gulp.task('bower:css', function () {
        // es tritt ein Problem auf, wenn für config.bower.css keine Datei angegeben ist
        return gulp.src(config.bower.css, {cwd : config.paths.bower})
            .pipe(expect(config.bower.css))
            .pipe(sourcemaps.init())
            .pipe(concat('bower.css'))
            .pipe(sourcemaps.write('/'))
            .pipe(gulp.dest(config.paths.dist + '/assets/css/'));
    });

    gulp.task('bower', gulp.series(
        'bower:css',
        'bower:js',
        'bower:assets')
    );

})();
