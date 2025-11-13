const path = require('path');
const gulp = require('gulp');
const uswds = require('@uswds/compile');
const sass = require('gulp-sass')(require('sass'));
const { src, dest, series } = gulp;

// USWDS settings
uswds.settings.version = 3;
uswds.settings.copyImages = true;

// Source paths
uswds.paths.src.img = './node_modules/@uswds/uswds/dist/img';
uswds.paths.src.js = './node_modules/@uswds/uswds/dist/js';
uswds.paths.src.fonts = './node_modules/@uswds/uswds/dist/fonts';
uswds.paths.src.libs = './node_modules/@uswds/uswds/dist/libs';

// Output paths
uswds.paths.dist.css = './static/uswds/css';
uswds.paths.dist.img = './static/uswds/img';
uswds.paths.dist.js = './static/uswds/js';
uswds.paths.dist.fonts = './static/uswds/fonts';
uswds.paths.dist.libs = './static/uswds/libs';

// **Your new Sass folder**
uswds.paths.dist.theme = './src/sass';
uswds.paths.dist.themeIncludePaths = [
  path.join(__dirname, 'node_modules/@uswds/uswds/packages/uswds-core/scss')
];

// Compile USWDS Sass
function compileSass() {
  return src('./src/sass/styles.scss')
    .pipe(
      sass({
        loadPaths: [
          './node_modules/@uswds/uswds/packages',
          './node_modules/@uswds/uswds',
        ],
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(dest('./static/uswds/css'));
}

// Copy sprite.svg
function copyIcons() {
  return src('./node_modules/@uswds/uswds/dist/img/sprite.svg')
    .pipe(dest('./static/uswds/img'));
}

// Default task
exports.default = series(compileSass, copyIcons);
exports.init = uswds.init;
exports.compile = series(uswds.compile, copyIcons, compileSass);
exports.watch = uswds.watch;
