var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('copy-misc-files', function() {
    return gulp.src(['staging/sitemap.xml', 'staging/tags/**/*.xml', 'public/favicon*', 'public/apple-icon*', 'public/android-icon*', 'public/ms-icon*', 'public/manifest.json', 'public/browserconfig.xml', 'public/**/*.pdf'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-fonts', function() {
    return gulp.src('public/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
})

gulp.task('copy-css-maps', function() {
    return gulp.src('public/css/**/*.map')
        .pipe(gulp.dest('dist/css'));
})

gulp.task('copy-static-files', function(callback) {
    runSequence('copy-misc-files', 'copy-fonts', 'copy-css-maps',
        callback
    )
})
