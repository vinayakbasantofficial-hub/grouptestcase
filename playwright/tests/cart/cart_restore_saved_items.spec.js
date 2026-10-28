const { test, expect } = require('@playwright/test');

test('cart restore saved items', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('restore-saved-item').click();
  await expect(page.getByTestId('cart-item')).toBeVisible();
});
