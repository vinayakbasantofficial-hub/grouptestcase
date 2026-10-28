const { test, expect } = require('@playwright/test');

test('cart increase quantity', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('increase-quantity').click();
  await expect(page.getByTestId('quantity-two')).toBeVisible();
});
