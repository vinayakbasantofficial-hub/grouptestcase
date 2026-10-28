const { test, expect } = require('@playwright/test');

test('payment reject expired coupon', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('apply-expired-coupon').click();
  await expect(page.getByTestId('coupon-error')).toBeVisible();
});
