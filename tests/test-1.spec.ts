import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
  await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
  await expect(page.getByRole('link', { name: 'Star microsoft/playwright on' })).toBeVisible();
  await expect(page.getByLabel('Star microsoft/playwright on')).toContainText('Star');
});