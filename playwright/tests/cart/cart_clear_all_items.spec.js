/**
 * Description: Verify clearing the cart removes all products.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart clear all items', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('clear-cart').click();
  await expect(page.getByTestId('empty-cart')).toBeVisible();
});
