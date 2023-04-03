import { Locator, Page } from "@playwright/test";

export class AddComputer {
  page: Page;
  computerNameField: Locator;
  introducedField: Locator;
  discontinuedField: Locator;
  companyDropdown: Locator;
  createButton: Locator;
  cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.computerNameField = this.page.getByLabel("Computer name");
    this.introducedField = this.page.getByLabel("Introduced");
    this.discontinuedField = this.page.getByLabel("Discontinued");
    this.companyDropdown = this.page.getByLabel("Company");
    this.createButton = this.page.getByRole("button", {
      name: "Create this computer",
    });
    this.cancelButton = this.page.getByRole("button", { name: "Cancel" });
  }

  async fillComputerForm(
    computerName: string,
    introducedDate: string,
    discontinuedDate: string,
    company: string
  ) {
    await this.computerNameField.fill(computerName);
    await this.introducedField.fill(introducedDate);
    await this.discontinuedField.fill(discontinuedDate);
    await this.companyDropdown.selectOption(company);
    await this.createButton.click();
  }
}
