/* global console, require, __dirname*/
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    http = require('http'),
    ecstatic = require('ecstatic');

(function() {
    'use strict';

    gulp.task('lint', function() {
        gulp.src(['./player/js/*.js', 'gulpfile.js'])
            .pipe(watch(function (files) {
                return files.pipe(jshint('.jshintrc'))
                       .pipe(jshint.reporter(stylish));
            }));
    });

    gulp.task('server', function(){
        http.createServer(
        ecstatic({ root: __dirname + '/player' })
        ).listen(8080);

        console.log('Listening on :8080');
    });

    gulp.task('default', ['server', 'lint']);

})();
