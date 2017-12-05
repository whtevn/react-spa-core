const gulp = require("gulp");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackDevServer = require('webpack-dev-server');
const sass = require('gulp-sass');
const gutil = require('gulp-util');

const dest = "build/";

const webpackConfig = require('./webpack.config.js')

gulp.task('build', [ 'copyResources', 'sass', 'webpack' ]);
gulp.task('default', [ 'build', 'startServer', 'watch' ]);

gulp.task('webpack', function() {
  return gulp.src(`./src/app/index.js`)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(dest));
});

gulp.task('copyResources', function(){
  gulp.src([`./src/index.html`, './src/assets/lib/**/*', './src/assets/images/**/*', './src/assets/icons/**/*'])
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.json', './src/**/*.html', './src/assets/lib/*.js'], ['copyResources']);
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dest));
});

gulp.task('startServer', function() {
  var compiler = webpack(Object.assign( webpackConfig , {
    watch: true,
    cache: true,
    devtool: '#cheap-module-eval-source-map'
  }));
  new webpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: `./${dest}`
  }).listen(8080);
})


