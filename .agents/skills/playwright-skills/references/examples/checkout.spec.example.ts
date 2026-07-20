import { test } from '@playwright/test';
import { LoginPage } from '../../tests/pages/login-page';
import { InventoryPage } from '../../tests/pages/inventory-page';
import { CartPage } from '../../tests/pages/cart-page';
import { CheckoutPage } from '../../tests/pages/checkout-page';

test('checkout happy path', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');
  await inventoryPage.expectLoaded();
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  await cartPage.expectProductInCart('Sauce Labs Backpack');
  await cartPage.checkout();
  await checkoutPage.enterCustomerInfo('Test', 'User', '4000');
  await checkoutPage.expectOverviewContains('Sauce Labs Backpack');
  await checkoutPage.finishOrder();
  await checkoutPage.expectOrderComplete();
});
