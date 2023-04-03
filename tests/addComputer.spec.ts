import { test, expect } from "@playwright/test";
import { ComputerFeed } from "../pages/computersFeed";
import { AddComputer } from "../pages/addComputer";

test("add new computer", async function ({ page }) {
  const computerFeed = new ComputerFeed(page);
  await computerFeed.goto();
  await computerFeed.addNewButton.click();

  const addComputer = new AddComputer(page);
  const computerName = "Commodore 64";
  await addComputer.computerNameField.fill(computerName);
  await addComputer.introducedField.fill("2000-12-20");
  await addComputer.discontinuedField.fill("2012-08-21");
  await addComputer.companyDropdown.selectOption("IBM");
  await addComputer.createButton.click();

  await expect(
    computerFeed.checkSuccessAdditionToast(computerName)
  ).toBeVisible();
});
