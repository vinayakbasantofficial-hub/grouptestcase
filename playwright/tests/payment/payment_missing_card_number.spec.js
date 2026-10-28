const { test, expect } = require('@playwright/test');

test('payment missing card number', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-without-card').click();
  await expect(page.getByTestId('validation-error')).toBeVisible();
});
