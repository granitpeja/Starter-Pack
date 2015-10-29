var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var less = require('gulp-less');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var path = require('path');


gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function() {
	return gulp.src('js/modules/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public'));
});

gulp.task('jade', function() {
	return gulp.src('js/modules/**/*.jade')
	.pipe(jade()) // pip to jade plugin
	.pipe(gulp.dest('public')); // tell gulp our output folder
});

gulp.task('default', ['jade', 'scripts', 'less'], function() {
	
});