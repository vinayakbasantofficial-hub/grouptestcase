const { test, expect } = require('@playwright/test');

test('payment successful card', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-card').click();
  await expect(page.getByTestId('payment-success')).toBeVisible();
});
