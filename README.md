How to put mock modules to node_modules directory:
--------------------------------------------------

create a folder `canvas` in your current project
add `index.js` with `module.exports = {}` to that folder.

Reference module in package.json:
"canvas": "file:./canvas",

run yarn


How to expose variables in .env file:
-------------------------------------

yarn add custom-env
require('custom-env').env()
