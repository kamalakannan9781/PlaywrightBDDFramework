import {Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import {chromium,Browser, BrowserContext,Page} from "playwright";

let browser: Browser;
let page: Page;
let context: BrowserContext;

setDefaultTimeout(60000)

//Launch the browser
BeforeAll(async function()
{
    console.log("BeforeAll")
    browser = await chromium.launch(
        {
            headless : false,
            slowMo : 1000,
        }
    )
})

//close the browsre
AfterAll(async function(){
    console.log("AfterAll")
    await browser.close();
})

//create a new browser context and page per scenario
Before(async function(){
    console.log("Before")
    context = await browser.newContext({permissions:[]});
    page = await context.newPage();
})

//cleanup after each scenario
After(async function() {
    console.log("After")
    await page.close()
    await context.close()
})

export {page,browser} //this page will be used in stepElement.ts file