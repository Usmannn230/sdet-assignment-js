const { expect } = require('@playwright/test');
class CompletePage {
  constructor(page) {
    this.page = page;
    this.confirmationMessage = page.locator('h2:has-text("Thank you for your order")');
  }

  async verifyOrderCompletion() {
    await expect(this.confirmationMessage).toBeVisible();
  }
}

module.exports = { CompletePage };