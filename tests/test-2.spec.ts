import { test, expect } from '@playwright/test';

test('BCC Test', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');
  await page.getByTestId('header-content').getByRole('link', { name: 'News' }).click();
  await expect(page.getByTestId('navigation')).toContainText('England');
  await page.getByRole('link', { name: 'N. Ireland' }).click();
  await expect(page.getByTestId('navigation')).toContainText('N. Ireland Politics');
  await expect(page.getByRole('heading', { name: 'Northern Ireland', exact: true })).toBeVisible();
});