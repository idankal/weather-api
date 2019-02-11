const gulp = require('gulp'),
      path = require('path'),
      webpack = require('webpack-stream'),
      devConfig = require('./webpack.dev.js'),
      prodConfig = require('./webpack.prod.js')

gulp.task('webpacker', function() {
  let config = (process.env.MODE === 'production') ? prodConfig : devConfig
  return gulp.src(path.join(__dirname, 'client', 'src', 'js', 'main.js'))
      .pipe(webpack(config))
      .pipe(gulp.dest(path.join(__dirname, 'client', 'src')))
})

gulp.task('watching', function() {
  return gulp.watch(path.join(__dirname, 'client', 'src', 'js', 'main.js'))
})

gulp.task('default', gulp.parallel('watching','webpacker'), function() {
  console.log("done");
})
