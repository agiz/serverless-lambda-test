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


Run
---

* yarn run lambda-build
* git commit -a -m 'msg'
* git push -u origin master
* This is automatically deployed to: https://lucid-thompson-2e0bb4.netlify.com/

Dev
---

* uncomment require('custom-env').env()
* change js/app.js to point to localhost
* yarn run lambda-serve
* run python -m SimpleHTTPServer 8089
* navigate to http://127.0.0.1:8089
