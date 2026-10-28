/**
 * Description: Verify repeated payment submissions produce only one confirmation.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment prevent duplicate charge', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('double-submit-payment').click();
  await expect(page.getByTestId('single-payment-confirmation')).toBeVisible();
});
