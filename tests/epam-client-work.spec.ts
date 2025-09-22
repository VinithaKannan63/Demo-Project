import { test, expect } from '@playwright/test';

test('EPAM Client Work Verification', async ({ page }) => {
  // Navigate to the EPAM website
  await page.goto('https://www.epam.com/');
  
  // Maximize the window and wait for 3 seconds
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(3000);
  
  // Click on the "Services" from the header menu
  await page.click('text=Services');
  
  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');
  
  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
  
  // Close the browser
  await page.close();
});