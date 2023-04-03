import { Page, Locator, expect } from "@playwright/test";

export class ComputerFeed {
  page: Page;
  currentComputers: Locator;
  addNewButton: Locator;
  successAddToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currentComputers = page.locator("table tbody tr");
    this.addNewButton = page.getByRole("link", { name: "Add a new computer" });
  }

  async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers");
  }

  async clickOnAddNewButton() {
    await this.addNewButton.click();
  }

  async checkSuccessAdditionToast(computerName: string) {
    await expect(
      this.page.getByText(`Done ! Computer ${computerName} has been created`)
    ).toBeVisible();
  }
}
