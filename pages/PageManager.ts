import { Page } from 'playwright';
import { HomePage } from './HomePage';
import { ProductDetailsPage } from './ProductDetailsPage';
import { CartPage } from './CartPage';
import { CheckoutPage } from './CheckoutPage';

export class PageManager {
    private page: Page;
    public homePage: HomePage;
    public productDetailsPage: ProductDetailsPage;
    public cartPage: CartPage;
    public checkoutPage: CheckoutPage;

    constructor(page: Page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.productDetailsPage = new ProductDetailsPage(page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }
}
