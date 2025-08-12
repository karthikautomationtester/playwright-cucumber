import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async addToCart(): Promise<void> {
        // Handle the dialog that appears when adding to cart
        this.handleDialog('dismiss');
        await this.page.getByRole('link', { name: 'Add to cart' }).click();
    }

    async goToCart(): Promise<void> {
        await this.page.getByRole('link', { name: 'Cart', exact: true }).click();
    }
}
