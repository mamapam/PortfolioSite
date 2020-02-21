'use strict';

// Initialize Modules
const gulp       = require('gulp'),
    autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    nodemon      = require('gulp-nodemon'),
    concat       = require('gulp-concat'),
    postcss      = require('gulp-postcss'),
    cssnano      = require('cssnano');


// File Path Variables
const paths = {
  styles: {
    src: './scss/**/*.scss',
    dest: './public/stylesheets/'
  }
}

// Scss Task
// sass.compiler = require('node-sass');

// function scssTask() {
//   return gulp.src(paths.styles.src)
//   .pipe(concat('style.scss'))
//   .pipe(sourcemaps.init())
//   .pipe(sass())
//   .pipe(postcss([ autoprefixer()]))//, cssnano() ]))
//   .pipe(sourcemaps.write('.'))
//   .pipe(gulp.dest(paths.styles.dest));
// }

// Nodemon Task
gulp.task('nodemon', cb => {
  let started = false;
  return nodemon({
    script: 'app.js'
  }).on('start', () => {
    if(!started) {
      cb();
      started = true;
    }
  });
});

// BrowserSync Task
gulp.task('browser-sync', gulp.series('nodemon', () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ['public/**/*.*'],
    port: 3001,
    browser: "google-chrome"
  })
}));

// // Watch Task
// function watchTask() {
//   gulp.watch([paths.styles.src], gulp.parallel(scssTask));
// }

// Default Task
exports.default = gulp.series(
  gulp.parallel('browser-sync')
);