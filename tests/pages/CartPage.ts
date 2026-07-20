import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async expectLoaded() {
    await expect(this.page.getByText('Your Cart')).toBeVisible();
    await expect(this.page.getByTestId('cart-list')).toBeVisible();
  }

  async expectProductInCart(productName: string) {
    await expect(this.page.getByTestId('cart-list')).toContainText(productName);
  }

  async startCheckout() {
    await this.page.getByRole('button', { name: 'Checkout' }).click();
  }
}
