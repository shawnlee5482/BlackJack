// Assigning modules to local variables
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
//var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var webpack = require('gulp-webpack');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
  ' */\n',
  ''
].join('');

// Default task
gulp.task('default', ['webpack', 'less', 'minify-css', 'minify-js', 'copy']);

gulp.task('webpack', function() {
  return gulp.src('client/js/*.js')
    .pipe(webpack({
      module: {
        loaders: [
          {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ],
      },
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('client/js/bundle/'))
});

// Less task to compile the less files and add the banner
gulp.task('less', function() {
  return gulp.src('client/less/main.less')
    .pipe(less())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('client/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('jshint', function() {
  return gulp.src('client/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('client/css/main.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('client/css/min'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify JS
gulp.task('minify-js', function() {
  return gulp.src(['client/js/bundle/bundle.js'] )
//    .pipe(uglify())
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('client/js/min'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Copy Bootstrap core files from node_modules to vendor directory
gulp.task('bootstrap', function() {
  return gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
    .pipe(gulp.dest('client/lib/bootstrap'))
});

// Copy jquery core JavaScript files from node_modules
gulp.task('jquery', function() {
  return gulp.src(['node_modules/jquery/dist/*.js'])
    .pipe(gulp.dest('client/lib/jquery'))
});

// Copy jquery core JavaScript files from node_modules
gulp.task('jquery_cookie', function() {
  return gulp.src(['node_modules/jquery.cookie/jquery.cookie.js'])
    .pipe(gulp.dest('client/lib/jquery_cookie'))
});


// Copy all dependencies from node_modules
gulp.task('copy', ['jquery', 'jquery_cookie', 'bootstrap']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    proxy: {
      target: 'http://localhost:8000'
    },
  })
});

// Watch Task that compiles LESS and watches for HTML or JS changes and reloads with browserSync
gulp.task('dev', ['webpack', 'browserSync', 'less', 'minify-css', 'minify-js'], function() {
  gulp.watch('client/js/*.js', ['webpack']);
  gulp.watch('client/js/*.js', ['jshint']);
  gulp.watch('client/less/*.less', ['less']);
  gulp.watch('client/css/*.css', ['minify-css']);
  gulp.watch('client/js/*.js', ['minify-js']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch(['client/index.html'], browserSync.reload);
  gulp.watch('client/modules/**/*.js', browserSync.reload);
});