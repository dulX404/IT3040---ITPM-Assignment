import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Input clearing clears output', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  // Type some input
  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await inputBox.fill('mama');
  
  // Wait for output to appear
  await page.waitForTimeout(500); // Adjust as needed for debounce
  
  // Clear the input
  await inputBox.clear();
  
  // Verify output field becomes empty
  const outputField = page.locator('output-selector'); // Replace with actual selector
  await expect(outputField).toBeEmpty();
});