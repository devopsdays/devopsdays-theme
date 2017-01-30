var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

    gulp.task('optimize-images', function(){
      return gulp.src(['staging/**/*.+(png|jpg|gif|svg)','!staging/favicon*', '!staging/apple-icon*', '!staging/android-icon*', '!staging/ms-icon*'])
      .pipe(cache(imagemin()))
      .pipe(gulp.dest('staging'))
    });
