import Utils from './utils'
const utils = new Utils()

export default class SearchPage {
  get searchInput() {
    return '#searchTerm'
  }
  get searchKeyword() {
    return 'Bank'
  }
  get searchHeading() {
    return 'div.container h2'
  }
  get searchResult() {
    return 'div.top_offset'
  }

  async windowMaximum() {
    await utils.windowMaximum()
  }
  async visit() {
    await utils.visit('/')
  }
  async searchInputVisible() {
    await $(this.searchInput).waitForDisplayed()
  }
  async searchInputValue() {
    await $(this.searchInput).setValue(this.searchKeyword)
  }
  async searchEnter() {
    await browser.keys('Enter')
  }
  async searchHeadingVisible() {
    expect(this.searchHeading).toBeExisting()
  }
  async searchHeadingVerify() {
    expect(this.searchHeading).toHaveTextContaining('Search Results:')
  }
  async searchResultVisible() {
    expect(this.searchResult).toBeExisting()
  }
  async searchResultVerify() {
    expect(this.searchResult).toHaveTextContaining(this.searchKeyword)
  }
}
