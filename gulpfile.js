'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();


gulp.task('js', function() {
  return gulp.src('src/js/script.js')
    .pipe(gulp.dest('build/'));
});


gulp.task('style', function() {
  return gulp.src('src/stylus/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build/'));
});


gulp.task('server', function() {
  browserSync.init({
    server: {
        baseDir: "./build/"
    }
  });
  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});


gulp.task('watch', function() {
  gulp.watch('src/stylus/**/*.styl', gulp.series('style'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
});


gulp.task('default', gulp.series('style', 'js', gulp.parallel('watch','server')));
