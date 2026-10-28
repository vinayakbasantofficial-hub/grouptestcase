const { test, expect } = require('@playwright/test');

test('search filter by category', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('filter-electronics').click();
  await expect(page.getByTestId('filtered-results')).toBeVisible();
});
