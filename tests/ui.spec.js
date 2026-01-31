import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Real time output update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().type('mama ');
  await expect(page.locator('textarea').nth(1)).not.toBeEmpty();
});