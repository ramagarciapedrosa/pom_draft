import { Page, Locator } from "@playwright/test";

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

  goto() {
    this.page.goto("https://computer-database.gatling.io/computers");
  }

  checkSuccessAdditionToast = (computerName: string) =>
    this.page.getByText(`Done ! Computer ${computerName} has been created`);
}
