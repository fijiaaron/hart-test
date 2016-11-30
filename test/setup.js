// setup.js


console.log("setup...")

global.sleep = require("sleep").sleep

global.log = require("./lib/log")

global.HartWebDriver = require("./lib/hart/web/HartWebDriver")
global.hart = new HartWebDriver()