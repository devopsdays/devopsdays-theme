var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');
    rev = require('gulp-rev');
    revReplace = require('gulp-rev-replace');
    htmlmin = require('gulp-htmlmin');
    imagemin = require('gulp-imagemin');
    cache = require('gulp-cache');
    runSequence = require('run-sequence');
    responsive = require('gulp-responsive');
    imgRetina = require('gulp-img-retina');
    critical = require('critical').stream;
    gutil = require('gulp-util');

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('public/**/*.html')
        .pipe(critical({
          base: 'staging/',
        inline: true,
        css: ['public/css/googlemaps.css','public/css/site.css'],
        ignore: ['@font-face',/url\(/],
        minify: true,
        timeout: 300000 // 5 min timeout
      }))
        .on('error', function(err) { gutil.log(gutil.colors.red(err.message)); })
        .pipe(gulp.dest('staging'));
});


gulp.task('responsive-images', function () {
  return gulp.src(['public/**/*.png','!public/favicon*', '!public/apple-icon*', '!public/android-icon*', '!public/ms-icon*'])
    .pipe(responsive({
      // produce multiple images from one source
      '**/*.png': [
        {
          width: '50%'
        },{
          width: '100%',
          rename: {
            suffix: '@2x'
          }
        },{
          width: '150%',
          rename: {
            suffix: '@3x'
          }
        }
      ]},{
        // global configuration
        errorOnEnlargement: false,
        withoutEnlargement: false,
        progressive: true,
        silent: true,
    }))
    .pipe(gulp.dest('staging'));
});

var retinaOpts = {
    // Your options here.
};

gulp.task('process-html', function() {

  return gulp.src(['public/**/*.html','!public/blog/**/*.html'])
    .pipe(imgRetina(retinaOpts))
    .on('error', function(e) {
      console.log(e.message);
    })
    .pipe(critical({
      base: 'public/',
      inline: true,
      css: ['public/css/googlemaps.css','public/css/site.css'],
      ignore: ['@font-face',/url\(/],
      minify: true,
      dimensions: [{
        width: 1300,
        height: 900
      },
      {
        width: 500,
        height: 900
      }]
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('staging'));

});

gulp.task('min-js', function(){
  return gulp.src('public/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('staging'));
});

gulp.task('copy-js', function(){
  return gulp.src('public/js/*min.js')
  .pipe(gulp.dest('staging/js'))
})

gulp.task('copy-css', function(){
  return gulp.src('public/css/*.css')
  .pipe(gulp.dest('staging/css'))
})

gulp.task('min-css', function(){
  return gulp.src('public/**/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('staging'));
});

gulp.task('min-html', function(){
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('staging'));
});


// The process-images task took about 6 minutes for just sponsors; for now we probably
// will just copy the images and not optimize them

gulp.task('process-images', function(){
  return gulp.src('public/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('staging'))
});

gulp.task('copy-images', function(){
  return gulp.src('public/**/*.+(png|jpg|gif|svg)')
  .pipe(gulp.dest('staging'))
});

gulp.task('copy-fonts', function(){
  return gulp.src('public/fonts/*.*')
  .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('process-files', function(){
  return gulp.src(['staging/**/*.+(png|jpg|gif|svg|js|css)','!staging/favicon*', '!staging/apple-icon*', '!staging/android-icon*', '!staging/ms-icon*'])
  .pipe(rev())
  .pipe(gulp.dest('dist'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('dist'))
});

gulp.task('update-files', function(){
  var manifest = gulp.src('dist/rev-manifest.json');

  return gulp.src(['staging/**/*.html', 'staging/**/*.xml', 'staging/**/*.css'])
      .pipe(revReplace({manifest: manifest, replaceInExtensions: ['.html', '.xml', '.css']}))
      .pipe(gulp.dest('dist'));
});

gulp.task('copy-other-files', function(){
  return gulp.src(['public/sitemap.xml', 'public/tags/**/*.xml'])
  .pipe(gulp.dest('dist'));
});

gulp.task('copy-icons', function(){
  return gulp.src(['staging/favicon*', 'staging/apple-icon*', 'staging/android-icon*', 'staging/ms-icon*', 'manifest.json', 'browserconfig.xml'])
  .pipe(gulp.dest('dist'));
});

gulp.task('default', function (callback) {
  runSequence('copy-js', 'copy-css', 'responsive-images', 'process-html', 'copy-images', 'process-files', 'update-files', 'copy-other-files', 'copy-icons', 'copy-fonts',
    callback
  )
})
