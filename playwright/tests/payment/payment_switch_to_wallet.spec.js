/**
 * Description: Verify customers can choose wallet payment at checkout.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('payment switch to wallet', async ({ page }) => {
  await page.goto('/checkout');
  await page.getByTestId('select-wallet').click();
  await expect(page.getByTestId('wallet-selected')).toBeVisible();
});
