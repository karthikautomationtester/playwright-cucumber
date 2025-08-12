import { Page, expect } from 'playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async fillCustomerDetails(name: string, country: string, city: string, creditCard: string, month: string, year: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill(name);
        await this.page.getByRole('textbox', { name: 'Country:' }).fill(country);
        await this.page.getByRole('textbox', { name: 'City:' }).fill(city);
        await this.page.getByRole('textbox', { name: 'Credit card:' }).fill(creditCard);
        await this.page.getByRole('textbox', { name: 'Month:' }).fill(month);
        await this.page.getByRole('textbox', { name: 'Year:' }).fill(year);
    }

    async fillName(name: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill(name);
    }

    async fillCountry(country: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Country:' }).fill(country);
    }

    async fillCity(city: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'City:' }).fill(city);
    }

    async fillCreditCard(creditCard: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Credit card:' }).fill(creditCard);
    }

    async fillMonth(month: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Month:' }).fill(month);
    }

    async fillYear(year: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Year:' }).fill(year);
    }

    async completePurchase(): Promise<void> {
        await this.page.getByRole('button', { name: 'Purchase' }).click();
    }

    async verifyOrderConfirmation(): Promise<void> {
        await expect(this.page.locator('body')).toContainText('Thank you for your purchase!');
    }

    async closeConfirmation(): Promise<void> {
        await this.page.getByRole('button', { name: 'OK' }).click();
    }

    async isOrderConfirmationVisible(): Promise<boolean> {
        return await this.page.locator('body').textContent().then(text => 
            text?.includes('Thank you for your purchase!') || false
        );
    }
}
