var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var less = require('gulp-less');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var path = require('path');
var gutil = require('gulp-util');
var minifyCSS = require('gulp-minify-css');


gulp.task('less', function () {
  return gulp.src('less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('bowerLess', function () {
  return gulp.src([
  			'bower_components/bootstrap/less/bootstrap.less'
		])
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('bower.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'));
});

gulp.task('scripts', function() {
	return gulp.src('js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('jade', function() {
	return gulp.src('js/modules/**/*.jade')
	.pipe(jade()) // pip to jade plugin
	.pipe(gulp.dest('public/views')); // tell gulp our output folder
});

gulp.task('bowerScripts', function() {
	return gulp.src([
			'bower_components/angular/angular.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/bootstrap/js/bootstrap.min.js'
		])
		.pipe(concat('bower.js'))
		.pipe(gulp.dest('public/js'));
})

gulp.task('default', ['jade', 'scripts', 'less', 'bowerScripts', 'bowerLess'], function() {
	// JADE WATCH
	gulp.watch('./js/modules/**/*.jade', function () {
		gulp.run('jade');
	});

	gulp.watch('js/**/*.js', function () {
		gulp.run('scripts');
	});

	gulp.watch('less/**/*.less', function () {
		gulp.run('less');
	});

	gutil.log(gutil.colors.cyan('************'));
	gutil.log(gutil.colors.cyan('* All Done *'), 'You can start editing your code, LiveReload will update your browser after any change..');
	gutil.log(gutil.colors.cyan('************'));
});