/**
 * Description: Verify an unmatched search displays a no-results message.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('search unknown product', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('search-unknown-product').click();
  await expect(page.getByTestId('no-results')).toBeVisible();
});
