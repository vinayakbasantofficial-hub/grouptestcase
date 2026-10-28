const { test, expect } = require('@playwright/test');

test('search partial product name', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('search-partial-product').click();
  await expect(page.getByTestId('search-results')).toBeVisible();
});
