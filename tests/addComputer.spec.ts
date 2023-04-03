import { test, expect } from "@playwright/test";
import { ComputerFeed } from "../pages/computersFeed";
import { AddComputer } from "../pages/addComputer";

test("add new computer", async function ({ page }) {
  const computerFeed = new ComputerFeed(page);
  await computerFeed.goto();
  await computerFeed.addNewButton.click();

  const addComputer = new AddComputer(page);
  const computerName = "Commodore 64";
  await addComputer.fillComputerForm(
    computerName,
    "1982-01-07",
    "1985-07-01",
    "Commodore International"
  );

  await computerFeed.checkSuccessAdditionToast(computerName);
});
