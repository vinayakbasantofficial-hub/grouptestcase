/**
 * Description: Verify an expired coupon is rejected with an error.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment reject expired coupon', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('apply-expired-coupon').click();
  await expect(page.getByTestId('coupon-error')).toBeVisible();
});
