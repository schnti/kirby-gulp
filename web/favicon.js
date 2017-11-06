(function () {

    /* global require */
    'use strict';

    var gulp = require('gulp');
    var runSequence = require('run-sequence');
    var realFavicon = require('gulp-real-favicon');
    var fs = require('fs');

    // File where the favicon markups are stored
    var FAVICON_DATA_FILE = '.tempFaviconData.json';

    var config = require('./../../../gulpfile.config.js');

    // Generate the icons. This task takes a few seconds to complete.
    // You should run it at least once to create the icons. Then,
    // you should run it whenever RealFaviconGenerator updates its
    // package (see the check-for-favicon-update task below).
    gulp.task('favicon-generate', function (done) {
        realFavicon.generateFavicon({
            masterPicture : config.favicon.masterPicture || 'website/assets/images/favicon.svg',
            dest : config.favicon.dest || 'website/assets/favicon/',
            iconsPath : config.favicon.iconsPath || '/assets/favicon/',
            design : {
                ios : {
                    pictureAspect : 'backgroundAndMargin',
                    backgroundColor : config.favicon.complementaryColor.toLowerCase() || '#ffffff',
                    margin : '25%',
                    assets : {
                        ios6AndPriorIcons : false,
                        ios7AndLaterIcons : false,
                        precomposedIcons : false,
                        declareOnlyDefaultIcon : true
                    },
                    appName: config.favicon.name || ''
                },
                desktopBrowser : {},
                windows : {
                    pictureAspect : 'whiteSilhouette',
                    backgroundColor : config.favicon.color.toLowerCase() || '#ffffff',
                    onConflict : 'override',
                    assets : {
                        windows80Ie10Tile : false,
                        windows10Ie11EdgeTiles : {
                            small : false,
                            medium : true,
                            big : false,
                            rectangle : false
                        }
                    },
                    appName: config.favicon.name || ''
                },
                androidChrome : {
                    pictureAspect : 'noChange',
                    themeColor : config.favicon.color.toLowerCase() || '#ffffff',
                    manifest : {
                        name : config.favicon.name || '',
                        display : 'browser',
                        orientation : 'notSet',
                        onConflict : 'override',
                        declared : true
                    },
                    assets : {
                        legacyIcon : false,
                        lowResolutionIcons : false
                    }
                },
                safariPinnedTab : {
                    pictureAspect : 'silhouette',
                    themeColor : config.favicon.color.toLowerCase() || '#ffffff'
                }
            },
            settings : {
                scalingAlgorithm : 'Mitchell',
                errorOnImageTooSmall : false
            },
            markupFile : FAVICON_DATA_FILE
        }, function () {
            done();
        });
    });

    gulp.task('copy-favicon', function () {
        return gulp.src(config.favicon.dest + 'favicon.ico')
            .pipe(gulp.dest(config.paths.dist));
    });

    // Inject the favicon markups in your HTML pages. You should run
    // this task whenever you modify a page. You can keep this task
    // as is or refactor your existing HTML pipeline.
    // gulp.task('inject-favicon-markups', function () {
    //     return gulp.src(['/website/site/snippets/*.html'])
    //         .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).favicon.html_code))
    //         .pipe(gulp.dest('website/'));
    // });

    // Check for updates on RealFaviconGenerator (think: Apple has just
    // released a new Touch icon along with the latest version of iOS).
    // Run this task from time to time. Ideally, make it part of your
    // continuous integration system.
    gulp.task('favicon:check', function (done) {
        var currentVersion = JSON.parse(fs.readFileSync(FAVICON_DATA_FILE)).version;
        realFavicon.checkForUpdates(currentVersion, function (err) {
            if (err) {
                throw err;
            }
        });
    });

    gulp.task('favicon', function (done) {
        runSequence(
            'favicon-generate',
            'copy-favicon',
            // 'check-for-favicon-update',
            done);
    });

})();
