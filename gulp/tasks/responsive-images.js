var gulp = require('gulp'),
    responsive = require('gulp-responsive');


gulp.task('responsive-images', function() {
    return gulp.src(['public/**/*.png', 'public/**/*.jpg',
            '!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*', '!public/**/sharing.jpg'
        ])
        .pipe(responsive({
            // produce multiple images from one source

            '**/logo_square.jpg': [{
                width: '250px',
                height: '250px',
                quality: 80
            }, {
                width: '500px',
                height: '500px',
                quality: 80,
                rename: {
                    suffix: '@2x'
                }
            }, {
                width: '1500px',
                height: '1500px,                   
                quality: 80,
                rename: {
                    suffix: '@3x'
                }
            }],

            '**/logo.*': [{
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
            '**/img/sponsors/*.*': [{
                width: '100px'
            }, {
                width: '200px',
                rename: {
                    suffix: '@2x'
                }
            }, {
                width: '300px',
                rename: {
                    suffix: '@3x'
                }
            }],
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
