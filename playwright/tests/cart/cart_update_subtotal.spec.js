const { test, expect } = require('@playwright/test');

test('cart update subtotal', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('increase-quantity').click();
  await expect(page.getByTestId('updated-subtotal')).toBeVisible();
});
