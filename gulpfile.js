/* File: gulpfile.js */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  env = require('gulp-env');

//compiling and moving sass files
gulp.task('default', ['env', 'watch', 'develop']);

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
      script: 'server.js',
      ext: 'html js css',
      tasks: ['lint']
    })
    .on('restart', function() {
      console.log('restarted!')
    })
})

//reload nodemon on changes
gulp.task('env', function() {
  env({
    file: '.env.json',
    vars: {
      PORT: 8080
    }
  });

})

//watch scss and create css files
gulp.task('watch', function() {
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
