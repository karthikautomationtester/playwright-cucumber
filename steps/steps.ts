import { After, Given, When, Then, Before } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright/test';
import { PageManager } from '../pages/PageManager';

let browserInstance: Browser;
let context: BrowserContext;
let page: Page;
let pageManager: PageManager;

Before(async function () {
   browserInstance = await chromium.launch({headless: true});
   context = await browserInstance.newContext();
   page = await context.newPage();
   pageManager = new PageManager(page);
});

After(async function () {
   await page.close();
   await context.close();
   await browserInstance.close();
});

Given('I am on the product page', async function () {
    await pageManager.homePage.navigateToHomePage();
});

When('I select a product', async function () {
    await pageManager.homePage.selectSamsungGalaxyS6();
});

When('I click the add to cart button', async function () {
    await pageManager.productDetailsPage.addToCart();
});

When('user proceeds to checkout', async function () {
    await pageManager.productDetailsPage.goToCart();
    await pageManager.cartPage.proceedToCheckout();
    await pageManager.checkoutPage.fillCustomerDetails('AxoneUser', 'UK', 'London', '12345', '10', '2025');
    await pageManager.checkoutPage.completePurchase();
});

Then('I should see the order confirmation page', async function () {
    await pageManager.checkoutPage.verifyOrderConfirmation();
    await pageManager.checkoutPage.closeConfirmation();
});