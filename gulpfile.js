var gulp = require('gulp');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var del = require('del');
var paths = {
  scripts: ['coffee/**/*.coffee'],
};
var onError = function(err) { console.log(err) }

gulp.task('clean', function() {
  return del(['js/game.min.js']);
});
 
gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(plumber({errorHandler: onError}))
    .pipe(coffee({bare: true}))
    .pipe(uglify())
    .pipe(concat('game.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);