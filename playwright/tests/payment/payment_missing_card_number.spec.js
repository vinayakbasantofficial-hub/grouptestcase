/**
 * Description: Verify submitting without a card number displays a required-field error.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment missing card number', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-without-card').click();
  await expect(page.getByTestId('validation-error')).toBeVisible();
});
