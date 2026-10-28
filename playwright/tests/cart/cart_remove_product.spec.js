/**
 * Description: Verify removing the only item shows an empty cart.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart remove product', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('remove-from-cart').click();
  await expect(page.getByTestId('empty-cart')).toBeVisible();
});
