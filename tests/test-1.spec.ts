import { test, expect } from '@playwright/test';

test('Navigate To Naukri profile', async ({ page }) => {
  await test.step('Navigate to Naukri homepage', async () => {
    await page.goto('https://www.naukri.com/');
    await page.getByRole('link', { name: 'Login', exact: true }).click();
  });

  await test.step('Fill credentials', async () => {
    await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('bhanu.qa402@gmail.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('bhanu@1994');
    await page.getByText('Show', { exact: true }).click();
  });

  await test.step('Login and verify profile', async () => {
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await expect(page.getByRole('main')).toContainText('Bhanu Prakesh');
  });
});