import { test } from "@playwright/test";
import { ComputerFeed } from "../pages/computersFeed";
import { AddComputer } from "../pages/addComputer";

test("add new computer", async function ({ page }) {
  const computersFeed = new ComputerFeed(page);
  await computersFeed.goto();
  await computersFeed.clickOnAddNewButton();

  const addComputer = new AddComputer(page);
  const computerName = "Commodore 64";
  await addComputer.fillComputerForm(
    computerName,
    "1982-01-07",
    "1985-07-01",
    "Commodore International"
  );

  await computersFeed.checkSuccessAdditionToast(computerName);
});
