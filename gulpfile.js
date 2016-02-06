/* File: gulpfile.js */
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  htmlmin = require('gulp-htmlmin'),
  connect = require('gulp-connect');

//default task "GULP" use this for development
gulp.task('default', ['server-develop', 'node-env']);
//build tasks create and minifies our build to the dist/ folder
gulp.task('build', ['compress', 'build-css', 'vendor', 'node-env-build', 'minify', 'move-images', 'server-production', 'connect']);

//reload nodemon on changes
gulp.task('server-develop', function() {
  nodemon({
      script: 'server.js',
      ext: 'html js css',
      env: {
        'NODE_ENV': 'development'
      },
      tasks: ['lint']
    })
    .on('restart', function() {
      console.log(':: server restarted ::')
    })
});

//THIS IS ONLY FOR TESTING
gulp.task('node-env-build', function() {
  return process.env.NODE_ENV = 'production';
});

//connect starts the server
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: false
  });
});

//lint js
gulp.task('lint', function() {
  gulp.src('src/assets/js/*.js')
    .pipe(jshint())
});

/*
COMPILING TASKS
run "GULP BUILD" before your commit to git!
*/

//compress the js files for the production
gulp.task('compress', function() {
  return gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

//compile the sass to css for the production
gulp.task('build-css', function() {
  return gulp.src('src/assets/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
});

gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('vendor', function() {
  gulp.src(['src/assets/libs/**/*'])
    .pipe(gulp.dest('dist/assets/libs/'));
});

gulp.task('move-images', function() {
  gulp.src(['src/assets/img/**/*'])
    .pipe(gulp.dest('dist/assets/img/'));
});
