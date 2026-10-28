const { test, expect } = require('@playwright/test');

test('cart remove product', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('remove-from-cart').click();
  await expect(page.getByTestId('empty-cart')).toBeVisible();
});
