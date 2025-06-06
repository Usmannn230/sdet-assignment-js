const { expect } = require('@playwright/test');
class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('button:text("Checkout")');
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator(`text=${productName}`)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };