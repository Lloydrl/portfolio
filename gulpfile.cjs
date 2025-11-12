const fs = require('fs');
const path = require('path');
const uswds = require('@uswds/compile');

// USWDS version
uswds.settings.version = 3;

// Output paths (dist)
uswds.paths.dist.css = './static/uswds/css';
uswds.paths.dist.img = './static/uswds/img';
uswds.paths.dist.js = './static/uswds/js';
uswds.paths.dist.fonts = './static/uswds/fonts';
uswds.paths.dist.libs = './static/uswds/libs';

// Make sure required folders exist to avoid ENOENT
const requiredFolders = [
  uswds.paths.dist.img + '/usa-icons',
  uswds.paths.dist.fonts,
  uswds.paths.dist.js,
  uswds.paths.dist.libs
];

requiredFolders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// Your SASS folder
uswds.paths.dist.theme = './src/styles';
uswds.paths.dist.themeIncludePaths = [
  path.join(__dirname, 'node_modules/@uswds/uswds/packages/uswds-core/scss')
];

// Export Gulp tasks
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
