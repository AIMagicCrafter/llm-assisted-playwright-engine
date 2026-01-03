import { chromium, Browser, Page } from "playwright";

export class BrowserExecutor {
  private browser!: Browser;
  private page!: Page;

  async start(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async goto(url: string): Promise<void> {
    if (!this.page) {
      throw new Error("Browser not started");
    }
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    if (!this.page) {
      throw new Error("Browser not started");
    }
    return this.page.title();
  }

  async stop(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }
}
