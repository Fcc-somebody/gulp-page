const gulp = require('gulp');
const connect = require('gulp-connect');
const cli = require('gulp-uglify');
// const sass = require('gulp-sass');
gulp.task('server', function () {
    connect.server({
        root: './',
        port: 3306,
        livereload: true
    });
    gulp.watch(['./index.html', './js/*.js', './css/*.css'], ['html']);
});
gulp.task('html', function () {
    gulp.src(['./index.html', './css/index.css']).pipe(connect.reload());
});
