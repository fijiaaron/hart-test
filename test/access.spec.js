describe("@Hart", () => {

	describe("@Access", () => {

		context("when not logged in", () => {

			it("should require credentials", () => {

				browser.url(hart.url)

				log("is loginForm visible: " + browser.isVisible(hart.loginPage.loginForm))
				browser.isVisible(hart.loginPage.loginForm).should.be.true

				log("is user visible: " + browser.isVisible(hart.homePage.user))
				browser.isVisible(hart.homePage.user).should.be.false
			})
		})

		context("when logged in", () => {

			it("should show pending appointments", () => {

				browser.url(hart.url)

				browser.waitForVisible(hart.loginPage.loginForm)
				browser.setValue(hart.loginPage.emailField, "aaron@one-shore.com")
				browser.setValue(hart.loginPage.passwordField, "Secret!1")
				browser.click(hart.loginPage.loginButton)

				browser.pause(1000)

				log("is loginForm visible: " + browser.isVisible(hart.loginPage.loginForm))
				browser.isVisible(hart.loginPage.loginForm).should.be.false

				log("is user visible: " + browser.isVisible(hart.homePage.user))
				browser.isVisible(hart.homePage.user).should.be.true
			})
		})



	})


	beforeEach("open hart web app", () =>{
		browser.url(hart.url)
		browser.pause(1000)

		browser.deleteCookie();
		browser.localStorage('DELETE');
		
	})

	afterEach("pause for a moment", () => {
		sleep(5)
	})
})