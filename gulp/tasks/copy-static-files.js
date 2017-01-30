var gulp = require('gulp');

gulp.task('copy-static-files', function(){
  return gulp.src(['staging/sitemap.xml', 'staging/tags/**/*.xml','public/favicon*', 'public/apple-icon*', 'public/android-icon*', 'public/ms-icon*', 'public/manifest.json', 'public/browserconfig.xml', 'public/**/*.pdf','public/fonts/**/*.*', 'public/css/**/*.map'])
  .pipe(gulp.dest('dist'));
});
