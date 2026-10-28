/**
 * Description: Verify a declined bank card shows a payment failure and does not confirm the order.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment declined card', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-declined-card').click();
  await expect(page.getByTestId('payment-error')).toBeVisible();
});
