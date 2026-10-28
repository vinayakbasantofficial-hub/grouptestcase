const { test, expect } = require('@playwright/test');

test('payment apply valid coupon', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('apply-valid-coupon').click();
  await expect(page.getByTestId('discount-applied')).toBeVisible();
});
