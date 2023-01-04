//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class ForgetPasswordPage {
  get signinBtn() {
    return '#signin_button'
  }
  get forgetPassLink() {
    return '[href="/forgot-password.html"]'
  }
  get emailInputField() {
    return '#user_email'
  }
  get emailAddress() {
    return 'test@test.com'
  }
  get sendPassBtn() {
    return '[type="submit"]'
  }
  get title() {
    return 'div.page-header>h3'
  }
  get description() {
    return '.offset3'
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

  async verifyForggetPassLink() {
    await utils.click(this.forgetPassLink)
    await utils.urlContains('/forgot-password.html')
  }

  async verifyEmailInputField() {
    await utils.waitForDisplayed(this.emailInputField)
    await utils.setValue(this.emailInputField, this.emailAddress)
  }

  async verifySendBtn() {
    await utils.waitAndClick(this.sendPassBtn)
    await utils.urlContains('/forgotten-password-send.html')
  }

  async verifyTitle() {
    await utils.waitForDisplayed(this.title)
    await utils.textContains('Forgotten Password')
  }

  async verifyDescription() {
    await utils.waitForDisplayed(this.description)
    await utils.textContains(this.emailAddress)
  }
}
