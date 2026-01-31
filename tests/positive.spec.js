import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert interrogative question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('kohomadha oyage adha dhavasa?');
  await page.getByText('කොහොමද ඔයගෙ අද දවස?').click();
});

test('Pos_Fun_0002 - Convert a complex daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Machan mata heta Lectures enna venne naehae. Oyata puluvandha heta liyana note ekee photo ekak aragena mata Whatsapp karanna. PDF karala danna puluvan nan godak hoDHAyi');
  await page.getByText('මචන් මට හෙට Lectures එන්න වෙන්නෙ නැහැ. ඔයට පුලුවන්ද හෙට ලියන note එකේ photo එකක් අරගෙන මට Whatsapp කරන්න. PDF කරල ඩන්න පුලුවන් නන් ගොඩක් හොඳයි').click();
});

test('Pos_Fun_0003 - Convert a short request phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oyaata puluvandha magee phone eka charge ekata gahanna?');
  await page.getByText('ඔයාට පුලුවන්ද මගේ phone එක charge එකට ගහන්න?').click();
});

test('Pos_Fun_0004 - Imperative Command Short', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Mama adha havasa Kandy yanava. Habaeyi iita kalin Samange gedharata gihilla eyaage laptop eka dhenna oone. iiye udhee magee laptop ekea screen eka black unaa. Mama eeka technician gaavata aran giyaa. Eyaa kivvaa dhavas dhekak vagee yayi kiyala repair karanna mokadha display ekata yana wire ekak damage velaalu. eeka replace karanna eyaala badu order karanna oonelu. eekata dhavas dhekak vagee yanavalu');
  await page.getByText('මම අද හවස Kandy යනව. හබැයි ඊට කලින් සමන්ගෙ ගෙදරට ගිහිල්ල එයාගෙ laptop එක දෙන්න ඕනෙ. ඊයෙ උදේ මගේ laptop එකේ screen එක black උනා. මම ඒක technician ගාවට අරන් ගියා. එයා කිව්වා දවස් දෙකක් වගේ යයි කියල repair කරන්න මොකද display එකට යන wire එකක් damage වෙලාලු. ඒක replace කරන්න එයාල බඩු order කරන්න ඕනෙලු. ඒකට දවස් දෙකක් වගේ යනවලු').click();
});

test('Pos_Fun_0005 - Convert a compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Api kaeema kanna yanava havasa 5.30ta vagee. Oyath enna');
  await page.getByText('අපි කෑම කන්න යනව හවස 5.30ට වගේ. ඔයත් එන්න').click();
});

test('Pos_Fun_0006 - Convert a tnterrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karunaakarala mata kiyanna puluvanda oyaage vayasa?');
  await page.getByText('කරුනාකරල මට කියන්න පුලුවන්ඩ ඔයාගෙ වයස?').click();
});

test('Pos_Fun_0007 - Convert a slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Uba mama kiyana vidhiyata eeka karapan');
  await page.getByText('උබ මම කියන විදියට ඒක කරපන්').click();
});

test('Pos_Fun_0008 - Compound sentence with conjunction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama hoDHata vaeda karaa, eeth mata lakunu aduyi.');
  await page.getByText('මම හොඳට වැඩ කරා, ඒත් මට ලකුනු අඩුයි.').click();
});

test('Pos_Fun_0009 - Complex sentence with condition', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama epaa kiyadhdhi kiyadhdhi eyaa ee vaedee karee.');
  await page.getByText('මම එපා කියද්දි කියද්දි එයා ඒ වැඩේ කරේ').click();
});

test('Pos_Fun_0010 - Interrogative question form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oyaa kohedha adha udheema yanna hadhanne');
  await page.getByText('ඔයා කොහෙද අද උදේම යන්න හදන්නෙ').click();
});

test('Pos_Fun_0011 - Imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('poddak methanata enna.');
  await page.getByText('පොඩ්ඩක් මෙතනට එන්න.').click();
});

test('Pos_Fun_0012 - Past tense usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('api giya sathiye 23n venidhaa trip ekak giyaa.');
  await page.getByText('අපි ගිය සතියෙ 23n වෙනිදා trip එකක් ගියා.').click();
});

test('Pos_Fun_0013 - Future tense usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama labana avurudhdhe rata yanavaa!');
  await page.getByText('මම ලබන අවුරුද්දෙ රට යනවා!').click();
});

test('Pos_Fun_0014 - Plural subject usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('paasal lamayi okkoma eka peeliyata skoole yanavaa');
  await page.getByText('පාසල් ලමයි ඔක්කොම එක පේලියට ස්කෝලෙ යනවා').click();
});

test('Pos_Fun_0015 - Formal greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suBha udhaeesanak veevaa!');
  await page.getByText('සුභ උදෑසනක් වේවා').click();
});

test('Pos_Fun_0016 - Polite request with marker', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakara mata obee haedhunumpath aQQkaya dhenna puluvandha?');
  await page.getByText('කරුණාකර මට ඔබේ හැදුනුම්පත් අංකය දෙන්න පුලුවන්ද?').click();
});

test('Pos_Fun_0017 - Informal command with slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('machan, eeka mata dhiyan.');
  await page.getByText('මචන්, ඒක මට දියන්.').click();
});

test('Pos_Fun_0018 - Colloquial slang phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('elakiri machan, api set vemu.');
  await page.getByText('එලකිරි මචන්, අපි සෙට් වෙමු.').click();
});

test('Pos_Fun_0019 - Daily usage expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata nidhaaganna oonee oona nidhimathayi');
  await page.getByText('මට නිදාගන්න ඕනේ ඕන නිදිමතයි').click();
});

test('Pos_Fun_0020 - Standard response', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari, mama eeka karannam.');
  await page.getByText('හරි, මම ඒක කරන්නම්.').click();
});

test('Pos_Fun_0021 - Multi-word phrase pattern', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mata bath kanna oone.');
  await page.getByText('මට බත් කන්න ඕනෙ.').click();
});

test('Pos_Fun_0022 - Repetition for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari mata eeta theerenavaa');
  await page.getByText('හරි හරි මට ඒට තේරෙනවා').click();
});

test('Pos_Fun_0023 - English abbreviations and short forms', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Oyaage NIC number eka mata SMS karanna puluvandha?');
  await page.getByText('ඔයාගෙ NIC number එක මට SMS කරන්න පුලුවන්ද?').click();
});

test('Pos_Fun_0024 - Convert sentences with Negation patterns', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Mata eeka karanna baehae kohomavath');
  await page.getByText('මට ඒක කරන්න බැහැ කොහොමවත්').click();
});

test('Pos_Fun_0025 - Converting Inputs containing punctuation marks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('Meeka ahanna! Oyaata baehae ehema karanna.');
  await page.getByText('මේක අහන්න! ඔයාට බැහැ එහෙම කරන්න.').click();
});