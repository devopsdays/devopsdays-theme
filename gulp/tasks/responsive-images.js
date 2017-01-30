var gulp = require('gulp'),
    responsive = require('gulp-responsive');

gulp.task('responsive-images', function() {
    return gulp.src(['public/**/*.png', '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*'])
        .pipe(responsive({
            // produce multiple images from one source
            '**/*.png': [{
                width: '50%'
            }, {
                width: '100%',
                rename: {
                    suffix: '@2x'
                }
            }, {
                width: '150%',
                rename: {
                    suffix: '@3x'
                }
            }]
        }, {
            // global configuration
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
        }))
        .pipe(gulp.dest('staging'));
});
