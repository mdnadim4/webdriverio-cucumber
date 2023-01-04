//Author: Nadim Mahmud
import Utils from './utils'
const utils = new Utils()

export default class ProductOrderPage {
  get username() {
    return '#user-name'
  }
  get password() {
    return '#password'
  }
  get loginBtn() {
    return '#login-button'
  }
  get burgerMenu() {
    return '#react-burger-menu-btn'
  }
  get logoutLink() {
    return 'a#logout_sidebar_link'
  }
  get productTitle() {
    return '.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name'
  }
  get productDescription() {
    return 'div:nth-of-type(1) > .inventory_item_description .inventory_item_desc'
  }
  get productPrice() {
    return 'div:nth-of-type(1) > .inventory_item_description .inventory_item_price'
  }
  get addToCart() {
    return '#add-to-cart-sauce-labs-backpack'
  }
  get product1() {
    return '#add-to-cart-sauce-labs-bolt-t-shirt'
  }
  get product2() {
    return '#add-to-cart-sauce-labs-fleece-jacket'
  }
  get cartIcon() {
    return '.shopping_cart_badge'
  }
  get qty() {
    return '.cart_quantity_label'
  }
  get description() {
    return '.cart_desc_label'
  }
  get list() {
    return '.cart_list'
  }
  get productList() {
    return '.cart_item'
  }
  get continueShop() {
    return '#continue-shopping'
  }
  get checkout() {
    return '#checkout'
  }
  get title() {
    return '.title'
  }
  get firstName() {
    return '#first-name'
  }
  get lastName() {
    return '#last-name'
  }
  get zipCode() {
    return '#postal-code'
  }
  get continueBtn() {
    return '#continue'
  }
  get cancelBtn() {
    return '#cancel'
  }
  get carlist() {
    return '.cart_list'
  }
  get summaryInfo() {
    return '.summary_info'
  }
  get finishBtn() {
    return '#finish'
  }
  get pageHeading() {
    return '.title'
  }
  get thanksTitle() {
    return '#checkout_complete_container > .complete-header'
  }
  get subDescription() {
    return '#checkout_complete_container > .complete-text'
  }
  get ponyImage() {
    return '[alt="Pony Express"]'
  }
  get backBtn() {
    return '#back-to-products'
  }


  async visitAndWindowSize() {
    await utils.windowMaximum()
    await utils.visit('https://www.saucedemo.com/')
  }
  async verifyInputFieldVisibility() {
    await utils.waitForDisplayed(this.username)
    await utils.waitForDisplayed(this.password)
  }
  async verifySetAllInputField() {
    await utils.setValue(this.username, 'standard_user')
    await utils.setValue(this.password, 'secret_sauce')
  }
  async verifyLoginBtn() {
    await utils.waitAndClick(this.loginBtn)
    await utils.urlContains('/inventory.html')
  }
  async verifySauceLogin() {
    await this.verifyInputFieldVisibility()
    await this.verifySetAllInputField()
    await this.verifyLoginBtn()
  }
  async verifyBurgerMenu() {
    await utils.waitAndClick(this.burgerMenu)
  }
  async clickOnLogoutLink() {
    await utils.waitAndClick(this.logoutLink)
    await utils.urlContains('www.saucedemo.com')
  }
  async verifySauceLogout() {
    await this.verifyBurgerMenu()
    await this.clickOnLogoutLink()
  }
  async verifyProductTitle() {
    await utils.waitForDisplayed(this.productTitle)
    await utils.textContains('Sauce Labs Backpack')
  }
  async verifyProductDescription() {
    await utils.waitForDisplayed(this.productDescription)
    await utils.textContains('laptop and tablet protection.')
  }
  async verifyProductPrice() {
    await utils.waitForDisplayed(this.productPrice)
    await utils.textContains('$29.99')
  }
  async verifyAddToCartBtn() {
    await utils.waitForDisplayed(this.addToCart)
    await utils.textContains('Add to cart')
  }
  async verifyProduct() {
    await utils.waitAndClick(this.product1)
    await utils.waitAndClick(this.product2)
  }
  async verifyShoppingCartIcon() {
    await utils.waitAndClick(this.cartIcon)
    await utils.urlContains('/cart.html')
  }
  async verifyProductLength() {
    await utils.haveLength(this.productList, 10)
  }
  async verifyCartAllElementVisibility() {
    await utils.waitForDisplayed(this.qty)
    await utils.waitForDisplayed(this.description)
    await utils.waitForDisplayed(this.list)
    await utils.waitForDisplayed(this.productList)
    await utils.waitForDisplayed(this.continueShop)
    await utils.waitForDisplayed(this.checkout)
  }
  async verifyCheckoutBtn() {
    await utils.waitAndClick(this.checkout)
    await utils.urlContains('/checkout-step-one.html')
  }

  async verifyCheckoutPageVisibility() {
    await utils.waitForDisplayed(this.title)
    await utils.waitForDisplayed(this.firstName)
    await utils.waitForDisplayed(this.lastName)
    await utils.waitForDisplayed(this.zipCode)
    await utils.waitForDisplayed(this.continueBtn)
    await utils.waitForDisplayed(this.cancelBtn)
  }
  async verifySetValueCheckoutForm() {
    await utils.setValue(this.firstName, 'Jarrett')
    await utils.setValue(this.lastName, 'Espinal')
    await utils.setValue(this.zipCode, '05403')
    await utils.click(this.continueBtn)
    await utils.urlContains('/checkout-step-two.html')
  }
  async verifyCheckoutOverviewPageVisibility() {
    await utils.waitForDisplayed(this.title)
    await utils.urlContains('Checkout: Overview')
    await utils.waitForDisplayed(this.carlist)
    await utils.waitForDisplayed(this.summaryInfo)
    await utils.waitForDisplayed(this.cancelBtn)
    await utils.waitForDisplayed(this.finishBtn)
  }
  async verifyFinishBtn() {
    await utils.waitAndClick(this.finishBtn)
    await utils.urlContains('/checkout-complete.html')
  }
  async verifyPageHeading() {
    await utils.waitForDisplayed(this.pageHeading)
    await utils.textContains('Checkout: Complete!')
  }
  async verifyThanksTitle() {
    await utils.waitForDisplayed(this.thanksTitle)
    await utils.textContains('THANK YOU FOR YOUR ORDER')
  }
  async verifySubDescription() {
    await utils.waitForDisplayed(this.subDescription)
    await utils.textContains('Your order has been dispatched')
  }
  async verifyPonyImg() {
    await utils.waitForDisplayed(this.ponyImage)
  }
  async verifyBackBtn() {
    await utils.waitAndClick(this.backBtn)
    await utils.urlContains('/inventory.html')
  }

}
