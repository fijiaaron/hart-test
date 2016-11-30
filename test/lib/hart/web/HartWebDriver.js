var LoginPage = require("./LoginPage")
var HomePage = require("./HomePage")

class HartWebDriver
{
	constructor()
	{
		this.init_components()
	}

	init_components() 
	{
		this.url = "https://app.hart.com"
		this.loginPage = Object.create(LoginPage)
		this.homePage = Object.create(HomePage)
	}
}

module.exports = HartWebDriver