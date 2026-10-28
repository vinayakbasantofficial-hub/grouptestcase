const { test, expect } = require('@playwright/test');

test('cart checkout requires login', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('checkout-as-guest').click();
  await expect(page.getByTestId('login-required')).toBeVisible();
});
