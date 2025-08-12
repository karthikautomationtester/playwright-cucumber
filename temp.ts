import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('AxoneUser');
  await page.getByRole('textbox', { name: 'Country:' }).fill('UK');
  await page.getByRole('textbox', { name: 'City:' }).fill('London');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('12345');
  await page.getByRole('textbox', { name: 'Month:' }).fill('10');
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('body')).toContainText('Thank you for your purchase!');
  await page.getByRole('button', { name: 'OK' }).click();
});