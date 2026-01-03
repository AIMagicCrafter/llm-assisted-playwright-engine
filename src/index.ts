import { chromium } from "playwright";

async function main(){
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://www.example.com");
    console.log(`Page title: ${await page.title()}`);
    await browser.close();
}


main().catch((err)=>{
    console.error("Engine failed:", err);
  process.exit(1);
})