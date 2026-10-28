/**
 * Description: Verify cancelling payment returns to the checkout summary.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment cancel before confirm', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('cancel-payment').click();
  await expect(page.getByTestId('checkout-summary')).toBeVisible();
});
