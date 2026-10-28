/**
 * Description: Verify that a successful sandbox card payment shows payment confirmation.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment successful card', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-card').click();
  await expect(page.getByTestId('payment-success')).toBeVisible();
});
