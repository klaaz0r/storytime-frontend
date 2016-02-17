var gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  livereload = require('gulp-livereload'),
  nodemon = require('gulp-nodemon'),
  //input files to work with
  input = {
    // **/*.extension gets all nested files
    'sass': 'source/scss/**/*.scss',
    'javascript': 'source/js/**/*.js',
    'html': 'source/**/*.html'
  },

  output = {
    'stylesheets': 'public/assets/css',
    'javascript': 'public/assets/js',
    'html': 'public'
  };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch', 'start-server']);

/* this tasks runs on the server and creates all the files (and makes 'em look like brem) */
gulp.task('deploy', ['build-css', 'minify-html', 'build-js']);

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
    .pipe(livereload());
});

/* compile scss files */
gulp.task('build-css', function() {
  return gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.stylesheets))
    .pipe(livereload());
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript))
    .pipe(livereload());
});

gulp.task('build-html', function() {
  return gulp.src(input.html)
    .pipe(gulp.dest(output.html))
    .pipe(livereload());
});

gulp.task('minify-html', function() {
  return gulp.src(input.html)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(output.html))
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch(input.html, ['build-html']);
});
