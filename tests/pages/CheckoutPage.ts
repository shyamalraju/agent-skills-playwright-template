import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) { }

  async expectInformationLoaded() {
    await expect(
      this.page.getByText('Checkout: Your Information'),
    ).toBeVisible();
    await expect(
      this.page.getByTestId('checkout-info-container'),
    ).toBeVisible();
  }

  async enterCustomerInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Zip/Postal Code').fill(postalCode);
  }

  async continueToOverview() {
    await this.page.getByRole('button', { name: 'Continue' }).click();
  }

  async expectOverviewLoaded() {
    await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
    await expect(
      this.page.getByTestId('checkout-summary-container'),
    ).toBeVisible();
  }

  async expectProductInOverview(productName: string) {
    await expect(this.page.getByTestId('cart-list')).toContainText(productName);
  }

  async expectOrderTotalsVisible() {
    await expect(this.page.getByTestId('subtotal-label')).toBeVisible();
    await expect(this.page.getByTestId('tax-label')).toBeVisible();
    await expect(this.page.getByTestId('total-label')).toBeVisible();
  }

  async cancelFromOverview() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }


}
