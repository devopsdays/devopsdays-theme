var gulp = require('gulp'),
    responsive = require('gulp-responsive');

gulp.task('responsive-images', function() {
    return gulp.src(['public/**/*.png', 'public/**/*.jpg',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*'
        ])
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
            }],
            '**/*.jpg': [{
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
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            witheMetadate: false,
        }))
        .pipe(gulp.dest('staging'));
});
