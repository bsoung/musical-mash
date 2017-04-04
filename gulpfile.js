'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gp_concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

gulp.task('sass', function () {
  return gulp.src('./public/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/build/css'));
});

gulp.task('watch', function() {
	gulp.watch(['./public/stylesheets/*.scss'], ['sass'])
});

gulp.task('default', ['sass', 'watch'], function() {});
gulp.task('prod', ['sass'], function() {});