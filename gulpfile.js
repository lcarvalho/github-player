var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    http = require('http'),
    ecstatic = require('ecstatic');

gulp.task('default', function(){
    http.createServer(
    ecstatic({ root: __dirname + '/player' })
    ).listen(8080);

    console.log('Listening on :8080');
});

gulp.task('lint', function() {
    gulp.src(['./player/js/*.js', 'Gulpfile.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
    var watcher = gulp.watch('./player/js/*.js', ['lint',]);
    watcher.on('changed', function(event){
        console.log('File '+event.path+' was '+event.type+', running tasks...');
    });
});
