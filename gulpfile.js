//dependencies
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  htmlmin = require('gulp-htmlmin'),
  cssmin = require('gulp-cssmin'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  image = require('gulp-image');

//input files to work with, this keeps everything organised
input = {
    // **/*.extension gets all nested files
    'sass': 'src/assets/scss/**/*.scss',
    'javascript': 'src/assets/js/**/*.js',
    //for the index html!!
    'html': 'src/*.html',
    //the complete angular app
    'angular': 'src/app/**/*',

    //seperate inputs for material css these are only compiled once eddited
    'materialCss': 'src/material/**/*.scss',
    'materialJs': 'src/material/js/**/*.js',

    //theme files are compresed and can be eddited
    'theme': 'src/assets/theme/**/*',


    'images': 'src/assets/images/**/*'
  },

  //where we save the files to once gulp is done with them
  output = {
    'stylesheets': 'public/assets/css',
    'javascript': 'public/assets/js',
    'images': 'public/images',
    'root': 'public',
    'app': 'public/app'
  };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch', 'start-server']);

/* this tasks runs on the server and creates all the files */
gulp.task('build', ['css', 'javascript', 'theme', 'angular', 'html', 'images']);

//starting express with the server.js file
gulp.task('start-server', function() {
  nodemon({
    script: 'server.js'
  })
});

/* run javascript through jshint */
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

/* compile scss files and minify them */
gulp.task('css', function() {
  return gulp.src(input.sass)
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest(output.stylesheets))
    .pipe(livereload());
});


/* basic build html for development*/
gulp.task('javascript', function() {
  return gulp.src(input.javascript)
    .pipe(uglify())
    .pipe(gulp.dest(output.javascript))
    .pipe(livereload());
});

/* basic build html for development*/
gulp.task('html', function() {
  return gulp.src(input.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(output.root))
    .pipe(livereload());
});

/* build angular file
WARNING: minify and uglify do not work atm!
*/
gulp.task('angular', function() {
  return gulp.src(input.angular)
    // .pipe(uglify())
    // .pipe(htmlmin({
    //   collapseWhitespace: true
    // }))
    .pipe(gulp.dest(output.app))
    .pipe(livereload());
});

/* basic theme if you made changes */
gulp.task('theme', function() {
  return gulp.src(input.theme)
    .pipe(cssmin())
    .pipe(gulp.dest(output.stylesheets))
    .pipe(livereload());
});

gulp.task('images', function() {
  return gulp.src(input.images)
    .pipe(image())
    .pipe(gulp.dest(output.images))
    .pipe(livereload());
});

gulp.task('clean', function() {
  return gulp.src('public/', {
      read: false
    })
    .pipe(clean());
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(input.javascript, ['jshint', 'javascript']);
  gulp.watch(input.sass, ['css']);
  gulp.watch(input.html, ['html']);
  gulp.watch(input.theme, ['theme']);
  gulp.watch(input.angular, ['angular']);
  gulp.watch(input.images, ['images']);
});
