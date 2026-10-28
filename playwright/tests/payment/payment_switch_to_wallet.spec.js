const { test, expect } = require('@playwright/test');

test('payment switch to wallet', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('select-wallet').click();
  await expect(page.getByTestId('wallet-selected')).toBeVisible();
});
