import { Page } from 'playwright';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async waitForElement(selector: string, timeout: number = 5000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }

    async getText(selector: string): Promise<string> {
        return await this.page.textContent(selector) || '';
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }

    async handleDialog(action: 'accept' | 'dismiss' = 'dismiss'): Promise<void> {
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            if (action === 'accept') {
                dialog.accept().catch(() => {});
            } else {
                dialog.dismiss().catch(() => {});
            }
        });
    }
}
