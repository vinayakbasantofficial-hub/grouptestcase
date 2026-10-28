/**
 * Description: Verify applying a cart coupon displays the discount.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('cart apply discount', async ({ page }) => {
  await page.goto('/cart');
  await page.getByTestId('apply-cart-coupon').click();
  await expect(page.getByTestId('discount-applied')).toBeVisible();
});
