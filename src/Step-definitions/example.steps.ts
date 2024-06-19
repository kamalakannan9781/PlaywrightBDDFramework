import {Given} from "@cucumber/cucumber"
import {page} from '../test.setup'
import {expect} from "@playwright/test"

Given("I navigate to the exchange url",async function()
{
    await page.goto("https://azqarelease.xchange.reged.com/ctiacom/default.aspx")   
    await expect(page).toHaveTitle("RegEd | Xchang")
    await page.locator("//input[@id='txtUserName']").fill("4544RGUA")  
    await page.locator("//input[@id='txtPassword']").fill("Atlas@123") 
    await page.locator("//input[@id='Submit']").click()
})