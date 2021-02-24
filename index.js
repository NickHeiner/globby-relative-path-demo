const path = require('path');
const globby = require('globby');

console.log(globby.sync(
  ['..'],
  {cwd: path.join(__dirname, 'node_modules'), gitignore: true}
))