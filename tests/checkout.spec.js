const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { CompletePage } = require('../pages/CompletePage');
const credentials = require('../test-data/credentials.json');
const checkoutInfo = require('../test-data/checkoutInfo.json');

test.describe('Checkout Tests', () => {
  test('User Places an Order and Checks Out Successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const completePage = new CompletePage(page);
    
    // Login
    await loginPage.navigate();
    await loginPage.login(credentials.username, credentials.password);
    
    // Add product to cart
    await productsPage.addToCart('Sauce Labs Backpack');
    await productsPage.goToCart();
    
    // Verify cart and proceed to checkout
    await cartPage.verifyProductInCart('Sauce Labs Backpack');
    await cartPage.proceedToCheckout();
    
    // Fill checkout info
    await checkoutPage.fillCheckoutInfo(
      checkoutInfo.firstName,
      checkoutInfo.lastName,
      checkoutInfo.postalCode
    );
    
    // Complete checkout
    await checkoutPage.finishCheckout();
    await completePage.verifyOrderCompletion();
  });
});