const { test, expect } = require('@playwright/test');

test('cart add product', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toBeVisible();
});
