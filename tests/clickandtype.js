import test from "@playwright/test";

test(" click and type ", async function ({ page }) {
  await page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  await page.click(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  await page.fill("#input-email", "sayaji");
  await page.fill("#input-password", "sayaji");
  await page.waitForTimeout(5000);
});
