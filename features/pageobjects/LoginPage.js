//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class LoginPage {
  get signinBtn() {
    return '#signin_button'
  }
  get userLogin() {
    return '#user_login'
  }
  get userPassword() {
    return '#user_password'
  }
  get submitBtn() {
    return '[type="submit"]'
  }
  get errorMessage() {
    return '.alert-error'
  }
  get username() {
    return 'li:nth-of-type(3) > .dropdown-toggle'
  }
  get setting() {
    return 'li:nth-of-type(2) > .dropdown-toggle'
  }
  get logout() {
    return 'a#logout_link'
  }

  async visitAndWindowSize() {
    await utils.windowMaximum()
    await utils.visit('/')
  }

  async clickOnSigninBtn() {
    await utils.waitAndClick(this.signinBtn)
    await utils.urlContains('/login.html')
    await utils.titleContains('Zero - Log in')
  }

  async verifyLogin(username) {
    await utils.waitForDisplayed(this.userLogin)
    await utils.setValue(this.userLogin, username)
  }

  async verifyPassword(password) {
    await utils.waitForDisplayed(this.userPassword)
    await utils.setValue(this.userPassword, password)
  }

  async clickOnSubmitBtn() {
    await utils.waitAndClick(this.submitBtn)
  }

  async verifyErrorMessage(message) {
    await utils.waitForDisplayed(this.errorMessage)
    await utils.textContains(message)
  }

  async verifySuccessLogin() {
    await utils.waitForDisplayed(this.username)
    await utils.waitForDisplayed(this.setting)
  }

  async verifyInvalidLogin() {
    await this.verifyLogin('test')
    await this.verifyPassword('test')
    await this.clickOnSubmitBtn()
    await this.verifyErrorMessage(`Login and/or password are wrong.`)
  }

  async verifyEmptyLogin() {
    await this.verifyLogin(' ')
    await this.verifyPassword(' ')
    await this.clickOnSubmitBtn()
    await this.verifyErrorMessage(`Login and/or password are wrong.`)
  }

  async verifyValidLogin() {
    await this.verifyLogin('username')
    await this.verifyPassword('password')
    await this.clickOnSubmitBtn()
    await utils.visit('/')
    await this.verifySuccessLogin()
  }

  async verifyLogout() {
    await utils.waitAndClick('li:nth-of-type(3) > .dropdown-toggle')
    await utils.waitAndClick(this.logout)
    await utils.waitForExist(this.signinBtn)
  }
}
