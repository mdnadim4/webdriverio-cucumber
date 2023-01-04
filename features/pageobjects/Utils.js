//Author: Nadim Mahmud
export default class Utils {

  async visit(selector) {
    await browser.url(selector)
  }
  async takeScreenshot(path) {
    await browser.saveScreenshot(path)
  }
  async waitForSecornd(seconds) {
    await browser.pause(seconds * 1000)
  }
  async windowMaximum() {
    await browser.maximizeWindow()
  }
  async waitForDisplayed(selector) {
    await $(selector).waitForDisplayed()
    expect(selector).toBeDisplayed()
  }
  async click(selector) {
    await $(selector).click()
  }
  async waitAndClick(selector) {
    await this.waitForDisplayed(selector)
    await this.click(selector)
  }
  async waitForExist(selector) {
    await $(selector).waitForExist()
    expect(selector).toBeExisting()
  }
  async urlContains(url) {
    expect(browser).toHaveUrlContaining(url)
  }
  async titleContains(title) {
    expect(browser).toHaveTitleContaining(title)
  }
  async textContains(text) {
    expect(browser).toHaveTextContaining(text)
  }
  async setValue(selector, key) {
    await $(selector).setValue(key)
  }
  async scrollIntoView(selector) {
    await $(selector).scrollIntoView()
  }
  async haveLength(selector, count) {
    expect(selector).toHaveLength(count)
  }
  async back() {
    await browser.back()
  }
  async forward() {
    await browser.forward()
  }
}
