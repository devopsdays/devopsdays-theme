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

gulp.task('useref', function(){
  return gulp.src('public/**/*.html')
      .pipe(useref({ searchPath: ['../static/']}))
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulpif('*.html', htmlmin({collapseWhitespace: true})))
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
  runSequence('copy-js', 'copy-css', 'min-html', 'copy-images', 'process-files', 'update-files', 'copy-other-files', 'copy-icons', 'copy-fonts',
    callback
  )
})
