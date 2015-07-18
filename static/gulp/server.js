'use strict';

// Include gulp
var gulp = require('gulp');
var paths = gulp.paths;
var server = require('gulp-webserver');


gulp.task('server', function () {
    gulp.src(paths.src)
        .pipe(server({
            host: "localhost",
            port: 3001,
            livereload: true,
            directoryListing: false,
            https: false,
            open: true,
            defaultFile: "index.html"
        }));
});
