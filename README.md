How to put mock modules to node_modules directory:
--------------------------------------------------

1. create a folder `canvas` in your current project
2. add `index.js` with `module.exports = {}` to that folder.

3. Reference module in package.json:
"canvas": "file:./canvas",

4. run yarn


How to expose variables in .env file:
-------------------------------------

* yarn add custom-env
* require('custom-env').env()

Netlify
-------

* set API_URL environment variable

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
