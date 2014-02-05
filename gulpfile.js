var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('default', function(){
  // place code for your default task here
});

gulp.task('lint', function() {
  gulp.src('./player/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  var watcher = gulp.watch('./player/js/*.js', ['lint',]);
  watcher.on('changed', function(event){
    console.log('File '+event.path+' was '+event.type+', running tasks...');
  });
});
