import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page.getByText('Products')).toBeVisible();
    await expect(this.page.getByTestId('inventory-list')).toBeVisible();
  }

  async addProductToCart(productName: string) {
    const product = this.page
      .getByTestId('inventory-item')
      .filter({ hasText: productName });

    await expect(product).toBeVisible();
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }

  async openCart() {
    await this.page.getByTestId('shopping-cart-link').click();
  }
}
