// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-cssnano');

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('scss/main.scss')
        .pipe(sass())
        // .pipe(minifyCss())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['scss/**/*'], ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
