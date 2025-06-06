const { expect } = require('@playwright/test');
class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async addToCart(productName) {
    await this.page.locator(`text=${productName}`).click();
    await this.page.locator('button:text("Add to cart")').click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
}

module.exports = { ProductsPage };