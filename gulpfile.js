'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

gulp.task('sass', function() {
  return gulp.src('./public/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/build/css'));
});

gulp.task('js', function() {
	return gulp.src('./public/javascripts/*.js')
		.pipe(gp_concat('gulp-concat.js'))
		.pipe(gulp.dest('./public/min/'))
		.pipe(gp_rename('vendor.min.js'))
		.pipe(gp_uglify())
		.pipe(gulp.dest('./public/build/js'))
})

gulp.task('watch', function() {
	gulp.watch(['./src/*/**.js', './src/*/*/**.js', './src/*/*/*/**.js', './public/stylesheets/*.scss'], ['sass', 'js'])
});

gulp.task('default', ['sass', 'js', 'watch'], function() {});
gulp.task('prod', ['sass', 'js'], function() {});