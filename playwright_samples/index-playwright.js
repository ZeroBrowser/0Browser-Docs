const pw = require('playwright');

(async () => {
    const browser = await pw.chromium.connect({
        wsEndpoint:
            'wss://proxy.0browser.com?token=5299f72f-f05b-4589-ad5d-1e9b3de55b9d&timeout=60000'
    });
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage({ acceptDownloads: true });

    await page.goto('https://news.ycombinator.com');
    await page.screenshot({ path: 'ycombinator.png' });

    await browser.close();
})();
