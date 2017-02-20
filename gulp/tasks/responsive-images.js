var gulp = require('gulp'),
    responsive = require('gulp-responsive');
runSequence = require('run-sequence');

gulp.task('responsive-images', function(callback) {
    runSequence('responsive-images-logos', 'responsive-sponsor-images', 'responsive-images-remaining',
        callback
    )
})

gulp.task('responsive-images-logos', function() {
    return gulp.src(['public/events/**/logo-square.*', '!public/**/sharing.jpg'])
        .pipe(responsive({
            // produce multiple images from one source

            '**/logo-square.*': [{
                width: '250px',
                height: '250px',
            }, {
                width: '500px',
                height: '500px',
                rename: {
                    suffix: '@2x'
                }
            }, {
                width: '1500px',
                height: '1500px',
                rename: {
                    suffix: '@3x'
                }
            }],
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            witheMetadate: false,
            ignoreAspectRatio: true,
        }))
        .pipe(gulp.dest('staging'));
});

gulp.task('responsive-sponsor-images', function() {
    return gulp.src(['public/img/**/sponsors/*.png', 'public/img/**/sponsors/*.jpg'])
        .pipe(responsive({
            // produce multiple images from one source

            '**/*.*': [{
                width: '200px'
            }, {
                width: '400px',
                rename: {
                    suffix: '@2x'
                }
            }, {
                width: '600px',
                rename: {
                    suffix: '@3x'
                }
            }],
        }, {
            // global configuration
            quality: 80,
            errorOnEnlargement: false,
            withoutEnlargement: false,
            progressive: true,
            silent: true,
            witheMetadate: false,
        }))
        .pipe(gulp.dest('staging/img'));
});


gulp.task('responsive-images-remaining', function() {
    return gulp.src(['public/**/*.png', 'public/**/*.jpg',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg', '!**/logo-square.*', '!public/images/sponsor/*.*'
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
