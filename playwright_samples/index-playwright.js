const pw = require('playwright');

(async () => {    
    const browser = await pw.chromium.connect({
        browserWSEndpoint: 
        'wss://proxy.0browser.com?token={YOUR-API-KEY}&timeout=60000',
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://news.ycombinator.com');
    await page.screenshot({ path: 'ycombinator.png' });

    await browser.close();
})();
