/**
 * Description: Verify quantity cannot be decreased below one.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart prevent negative quantity', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('decrease-at-one').click();
  await expect(page.getByTestId('quantity-one')).toBeVisible();
});
