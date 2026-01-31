import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Input clearing clears output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputBox.fill('mama');
  await page.waitForTimeout(1000);
  await expect(inputBox).toHaveValue('mama');
  await inputBox.clear();
  await page.waitForTimeout(500);
  await expect(inputBox).toHaveValue('');
});