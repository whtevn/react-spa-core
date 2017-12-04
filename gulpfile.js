const gulp = require("gulp");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackDevServer = require('webpack-dev-server');
const sass = require('gulp-sass');
const gutil = require('gulp-util');

const webpackConfig = require('./webpack.config.js')

const appName = process.env.APP_NAME||"conversation";

gulp.task('build', [ 'copyResources', 'sass', 'webpack' ]);
gulp.task('default', [ 'build', 'startServer', 'watch' ]);

gulp.task('webpack', function() {
  return gulp.src(`./src/apps/${appName}-app/index.js`)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('www/'));
});

gulp.task('copyResources', function(){
  gulp.src([`./src/index.html`, './src/assets/lib/**/*', './src/assets/images/**/*'])
    .pipe(gulp.dest('www/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.json', './src/**/*.html', './src/assets/lib/*.js'], ['copyResources']);
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('www/'));
});

gulp.task('startServer', function() {
  var compiler = webpack(Object.assign( webpackConfig , {
    watch: true,
    cache: true,
    devtool: '#cheap-module-eval-source-map'
  }));
  new webpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: './www'
  }).listen(8080);
})


