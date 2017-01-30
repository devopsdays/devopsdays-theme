var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imgRetina = require('gulp-img-retina');

    var retinaOpts = {
        // Your options here.
    };
    gulp.task('process-html', function() {

      return gulp.src(['public/**/*.html'])
        .pipe(imgRetina(retinaOpts))
        .on('error', function(e) {
          console.log(e.message);
        })
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('staging'));

    });
