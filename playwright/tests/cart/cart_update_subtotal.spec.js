/**
 * Description: Verify cart subtotal updates when quantity changes.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart update subtotal', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('increase-quantity').click();
  await expect(page.getByTestId('updated-subtotal')).toBeVisible();
});
