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
    image = require('gulp-image'),
    concat = require('gulp-concat'),
    bower = require('gulp-bower'),
    iife = require("gulp-iife"),
    addStream = require('add-stream'),
    gulpNgConfig = require('gulp-ng-config'),
    ngmin = require('gulp-ngmin'),
    install = require("gulp-install");

var Server = require('karma').Server;
//input files to work with, this keeps everything organised
input = {
        // **/*.extension gets all nested files
        'sass': 'src/assets/scss/**/*.scss',
        'javascript': 'src/assets/js/**/*.js',
        //for the index html
        'html': 'src/*.html',
        //the complete angular app
        'angular': 'src/app/**/*.js',
        //angular html views
        'angular_views': 'src/app/components/**/*.html',
        //theme files are compresed and can be eddited
        'theme_css': 'src/assets/theme/**/*.css',
        'theme_fonts': 'src/assets/theme/fonts/**/*',
        //bower components are moved (only the minjs files )
        'vendor': 'bower_components/**/*.js',
        //image folder
        'images': 'src/assets/images/**/*'
    },

    //where we save the files to once gulp is done with them
    output = {
        'stylesheets': 'public/assets/css',
        'javascript': 'public/assets/js',
        'images': 'public/images',
        'root': 'public',
        'app': 'public/app',
        'app_views': 'public/app/components',
        'vendor': 'public/vendor',
        'theme_fonts': 'public/assets/css/fonts',
    };

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['watch', 'start-server', 'angular']);

/* this tasks runs on the server and creates all the files */
gulp.task('build', ['bower', 'css', 'javascript', 'theme_fonts', 'theme_css', 'angular', 'html', 'images', 'angular_views']);

//starting express with the server.js file
gulp.task('start-server', function() {
    nodemon({
        script: 'server.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
});

/* Run "bower install" */
gulp.task('bower_install', function(cb) {
    return bower();
    cb(err);
});
/* sync bower functions*/
gulp.task('bower', ['bower_install'], function() {
    return gulp.src(input.vendor)
        .pipe(gulp.dest(output.vendor))
        .pipe(livereload());
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
        .pipe(gulp.dest(output.root))
        .pipe(livereload());
});


/*Angular views  NO MINIFY YET*/
gulp.task('angular_views', function() {
    return gulp.src(input.angular_views)
        .pipe(gulp.dest(output.app_views))
        .pipe(livereload());
});

/* build angular file
WARNING: minify and uglify do not work atm! ONLY CONCAT TO ONE FILE!
*/
gulp.task('angular', function() {
    return gulp.src(input.angular)
        .pipe(process.env.NODE_ENV === 'production' ? addStream.obj(config('production')) : addStream.obj(config('development')))
        .pipe(concat('app.js'))
        .pipe(iife())
        .pipe(gulp.dest(output.app))
        .pipe(livereload());
});

/* basic theme if you made changes */
gulp.task('theme_css', function() {
    return gulp.src(input.theme_css)
        .pipe(cssmin())
        .pipe(gulp.dest(output.stylesheets))
        .pipe(livereload());
});

/* moving all the fonts */
gulp.task('theme_fonts', function() {
    return gulp.src(input.theme_fonts)
        .pipe(gulp.dest(output.theme_fonts))
        .pipe(livereload());
});


/* moving all the images to public*/
gulp.task('images', function() {
    return gulp.src(input.images)
        .pipe(image())
        .pipe(gulp.dest(output.images))
        .pipe(livereload());
});

/* clean task is for development!! remove the complete public folder */
gulp.task('clean', function(cb) {
    return gulp.src('public/', {
            read: false
        })
        .pipe(clean());
    cb(err);
});

/* deploy task is only for server use, it first cleans the public folder */
gulp.task('deploy', ['clean'], function() {
    gulp.start('build');
});

//setup the correct settings
function config(state) {
    return gulp.src('./app.config.json')
        .pipe(gulpNgConfig('app.config', {
            environment: state
        }));
};

//run npm install for missing modules
gulp.task('npm_install', function() {
    return gulp.src(['./package.json'])
        .pipe(install());
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(input.javascript, ['jshint', 'javascript']);
    gulp.watch(input.sass, ['css']);
    gulp.watch(input.html, ['html']);
    gulp.watch(input.theme, ['theme']);
    gulp.watch(input.angular, ['angular']);
    gulp.watch(input.angular_views, ['angular_views']);
    gulp.watch(input.images, ['images']);
});
