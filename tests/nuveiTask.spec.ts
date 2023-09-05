import { test, expect } from '@playwright/test';

test('TC1', async ({ page }) => {
  
  // open a webpage
  await page.goto('https://nuvei.com/');
  
  // navigate to '/partner-integrations'
  await page.getByRole('button', { name: 'Solutions' }).click();
  
  await page.click("text=Platform integrations");
  
  // validate that location is loaded before starting to fill search text field
  const locationDropdownList = page.locator("//button//div[normalize-space(text())='Location']");
  await locationDropdownList.waitFor({state: "visible"})

  // fill the search text field
  await page.locator("//input[contains(@class, 'form-control search-input')]").fill('Commerce');

  // choose the options

  await page.locator("//button//div[normalize-space(text())='Partner Type']").click();
  await page.locator("//div[contains(@class, 'dropdown-menu show')]//li//span[normalize-space(text())='eCommerce platform']").click();

  await page.locator("//button//div[normalize-space(text())='Industry']").click();
  await page.locator("//div[contains(@class, 'dropdown-menu show')]//li//span[normalize-space(text())='Digital goods']").click();

  await locationDropdownList.click();
  await page.locator("//div[contains(@class, 'dropdown-menu show')]//li//span[normalize-space(text())='Canada']").click();
  await page.locator("//div[contains(@class, 'dropdown-menu show')]//li//span[normalize-space(text())='Great Britain']").click();

  // click on third result
  await page.locator("//h5[normalize-space(text())='BigCommerce']//following-sibling::span[normalize-space(text())='Cloud-based, full-feature eCommerce platform']").click();

  // validate that partner name is BigCommerce
  await expect(page.locator("//h1[contains(@class, 'entry-title text-center mb-4')]")).toHaveText('BigCommerce');

});