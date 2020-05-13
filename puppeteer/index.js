const puppeteer = require('puppeteer-core');

(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint:
            'wss://proxy.0browser.com?token={YOUR-API-KEY}&timeout=60000',
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'capture.png' });

    await browser.close();
})();