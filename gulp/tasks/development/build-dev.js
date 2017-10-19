var gulp = require('gulp'),
  runSequence = require('run-sequence');

gulp.task('dev', function (callback) {
  runSequence('bower', 'sass', 'js-concat', 'watch',
    callback
  )
})
