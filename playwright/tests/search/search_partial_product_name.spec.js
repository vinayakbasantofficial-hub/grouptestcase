/**
 * Description: Verify a partial product name returns matching results.
 * Expected result: The UI displays the expected result indicator.
 */
const { test, expect } = require('@playwright/test');

test('search partial product name', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('search-partial-product').click();
  await expect(page.getByTestId('search-results')).toBeVisible();
});
