const { test, expect } = require('@playwright/test');

test('search sort by price', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('sort-price-low-high').click();
  await expect(page.getByTestId('sorted-results')).toBeVisible();
});
