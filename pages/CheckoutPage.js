const { expect } = require('@playwright/test');
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.postalCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('input[type="submit"]');
    this.finishButton = page.locator('button:text("Finish")');
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };