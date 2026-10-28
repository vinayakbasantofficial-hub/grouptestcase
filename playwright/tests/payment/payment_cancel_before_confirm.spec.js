const { test, expect } = require('@playwright/test');

test('payment cancel before confirm', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('cancel-payment').click();
  await expect(page.getByTestId('checkout-summary')).toBeVisible();
});
