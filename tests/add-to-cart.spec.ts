import { expect, test } from '@playwright/test';
import { CartPage } from './pages/CartPage';
import { InventoryPage } from './pages/InventoryPage';
import { LoginPage } from './pages/LoginPage';

test('adds a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const productName = 'Sauce Labs Backpack';

  await loginPage.goto();
  await loginPage.loginAs('standard_user', 'secret_sauce');
  await inventoryPage.expectLoaded();

  await inventoryPage.addProductToCart(productName);
  await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');

  await inventoryPage.openCart();

  await expect(page).toHaveURL(/\/cart\.html$/);
  await cartPage.expectLoaded();
  await cartPage.expectProductInCart(productName);
});
