/**
 * Description: Verify an exact product query returns search results.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('search exact product name', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('search-exact-product').click();
  await expect(page.getByTestId('search-results')).toBeVisible();
});
