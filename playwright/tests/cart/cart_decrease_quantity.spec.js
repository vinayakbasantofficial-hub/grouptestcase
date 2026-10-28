/**
 * Description: Verify decreasing a product quantity updates it to one.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart decrease quantity', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('decrease-quantity').click();
  await expect(page.getByTestId('quantity-one')).toBeVisible();
});
