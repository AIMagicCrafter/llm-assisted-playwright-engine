import { BrowserExecutor } from "./executor/browserExecutor";

async function main() {
  const browserExecutor = new BrowserExecutor();
  await browserExecutor.start();
  await browserExecutor.goto("https://example.com");
  const title = await browserExecutor.getTitle();
  console.log("Page title:", title);
  await browserExecutor.stop();
}

main().catch((err) => {
  console.error("Engine failed:", err);
  process.exit(1);
});
