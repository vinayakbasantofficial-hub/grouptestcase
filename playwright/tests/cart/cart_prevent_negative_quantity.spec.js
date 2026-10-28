const { test, expect } = require('@playwright/test');

test('cart prevent negative quantity', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('decrease-at-one').click();
  await expect(page.getByTestId('quantity-one')).toBeVisible();
});
