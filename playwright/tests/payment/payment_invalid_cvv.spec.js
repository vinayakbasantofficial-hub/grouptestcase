/**
 * Description: Verify checkout rejects a card with an invalid security code.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment invalid cvv', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-invalid-cvv').click();
  await expect(page.getByTestId('validation-error')).toBeVisible();
});
