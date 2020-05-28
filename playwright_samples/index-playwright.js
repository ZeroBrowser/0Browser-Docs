const pw = require('playwright');

(async () => {
    const browser = await pw.chromium.connect({
        wsEndpoint:
            'wss://proxy.0browser.com?token={YOUR-API-KEY}&timeout=60000'
    });
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage({ acceptDownloads: true });

    await page.goto('https://news.ycombinator.com');
    await page.screenshot({ path: 'ycombinator.png' });

    await browser.close();
})();
