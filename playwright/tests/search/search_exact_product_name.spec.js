const { test, expect } = require('@playwright/test');

test('search exact product name', async ({ page }) => {
  await page.goto('/products');
  await page.getByTestId('search-exact-product').click();
  await expect(page.getByTestId('search-results')).toBeVisible();
});
