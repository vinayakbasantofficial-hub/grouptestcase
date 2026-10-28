const { test, expect } = require('@playwright/test');

test('payment expired card', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-expired-card').click();
  await expect(page.getByTestId('payment-error')).toBeVisible();
});
