import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/contacts/i);
});

test("has placeholder with search input", async ({ page }) => {
  const input = page.getByTestId("searchinput");
  await expect(input).toHaveAttribute("placeholder", "Search");
  await input.fill("가연");
  await expect(input).toHaveValue("가연");
});
