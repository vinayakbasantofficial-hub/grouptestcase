/**
 * Description: Verify an expired card is rejected at checkout.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment expired card', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-expired-card').click();
  await expect(page.getByTestId('payment-error')).toBeVisible();
});
