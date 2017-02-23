'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();


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
});


gulp.task('default', gulp.series('style', gulp.parallel('watch','server')));