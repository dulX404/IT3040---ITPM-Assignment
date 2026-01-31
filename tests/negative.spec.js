import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Joined words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mamahetagedharayanavaa');
  
  const outputText = await page.locator('output-selector').textContent(); 
  expect(outputText).toContain('මම ගෙදර යනවා');
});

test('Neg_Fun_0002 - English word treated as Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('man gate eka langa innavaa.');
 
  const outputText = await page.locator('output-selector').textContent(); 
  expect(outputText).toContain('මම Gate එක ළඟ ඉන්නවා.');
});

test('Neg_Fun_0003 - URL preservation failure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('poddak www.google.com balanna.');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('www.google.lk');
});

test('Neg_Fun_0004 - Email address preservation failure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oyage CV eka jagath@gmail.com  ekata evanna.');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('jagath@gmail.com');
});

test('Neg_Fun_0005 - Joined English and Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Zoommeeting ekak thiyenava.');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('Zoom meeting එකක් තියෙනවා.');
});

test('Neg_Fun_0006 - All Uppercase (Caps Lock) ambiguity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('MATA HETA CAMPUS EKATA ENNA WENNE NA WADAK TIYANAWA');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('මට හෙට කැම්පස් එකට එන්න වෙන්නෙ නෑ වැඩක් තියනව');
});

test('Neg_Fun_0007 - Ambiguous spelling (ණ vs න)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakarala meheta enna');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('කරුණාකරල මෙහෙට එන්න');
});

test('Neg_Fun_0008 - Code syntax preservation failure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('System.out.println("hello world") kiyala thamai print karanna one');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('System.out.println("hello world")');
});

test('Neg_Fun_0009 - Handling Full English Sentences', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('The bus is coming now.');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toBe('The bus is coming now.');
});

test('Neg_Fun_0010 - Handling sentences with complex measurement units', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('laQQkaavee uparima veega siimaava 100kmph');
  const outputText = await page.locator('output-selector').textContent();
  expect(outputText).toContain('100kmph');
});