const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const credentials = require('../test-data/credentials.json');

test.describe('Login Tests', () => {
  test('Verify User Login with Valid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.navigate();
    await loginPage.login(credentials.username, credentials.password);
    await loginPage.verifySuccessfulLogin();
  });
});