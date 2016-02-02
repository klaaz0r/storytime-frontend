/* File: gulpfile.js */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint');

//compiling and moving sass files
gulp.task('default', ['watch', 'develop']);

gulp.task('build-css', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/styles/'))
});

//lint js
gulp.task('lint', function() {
  gulp.src('public/js/*.js')
    .pipe(jshint())
})

//reload nodemon on changes
gulp.task('develop', function() {
  nodemon({
      script: 'app.js',
      ext: 'html js css',
      tasks: ['lint']
    })
    .on('restart', function() {
      console.log('restarted!')
    })
})

//watch scss and create css files
gulp.task('watch', function() {
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
