var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function() {
	gulp.src('assets/css/styles.css')
		.pipe(autoprefixer('last 2 version', "> 2%"))
		.pipe(minifycss())
		.pipe(gulp.dest('assets/css/min'));
});

gulp.task('less', function() {
	gulp.src('assets/less/styles.less')
		.pipe(less())
		.pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
	gulp.run('less');
	gulp.run('css');

	gulp.watch('assets/css/*.css', function() {
		gulp.run('css');
	});
	gulp.watch('assets/less/*.less', function() {
		gulp.run('less');
	});
});