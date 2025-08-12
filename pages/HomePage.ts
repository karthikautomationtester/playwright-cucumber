import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToHomePage(): Promise<void> {
        await this.navigate('https://www.demoblaze.com/index.html');
    }

    async selectProduct(productName: string): Promise<void> {
        await this.page.getByRole('link', { name: productName }).click();
    }

    async selectSamsungGalaxyS6(): Promise<void> {
        await this.page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    }
}
