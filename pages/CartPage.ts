import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async proceedToCheckout(): Promise<void> {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }

    async placeOrder(): Promise<void> {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
    }
}
