const { test, expect } = require('@playwright/test');

test('payment invalid cvv', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('pay-invalid-cvv').click();
  await expect(page.getByTestId('validation-error')).toBeVisible();
});
