import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Standard Singlish to Sinhala conversion is accurate.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('pissuhaedhilaa');
  await page.getByText('පිස්සු හැදිලා').click();
});