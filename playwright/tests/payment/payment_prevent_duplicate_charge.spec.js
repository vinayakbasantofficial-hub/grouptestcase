const { test, expect } = require('@playwright/test');

test('payment prevent duplicate charge', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('double-submit-payment').click();
  await expect(page.getByTestId('single-payment-confirmation')).toBeVisible();
});
