/**
 * Description: Verify saved products can be restored to the cart.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart restore saved items', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('restore-saved-item').click();
  await expect(page.getByTestId('cart-item')).toBeVisible();
});
